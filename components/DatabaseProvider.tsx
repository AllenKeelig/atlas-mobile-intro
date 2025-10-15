import * as FileSystem from 'expo-file-system/legacy';
import { Asset } from 'expo-asset';
import React, { useState, useEffect, Suspense } from 'react';
import * as SQLite from "expo-sqlite";

async function loadDatabase() {
  const name = 'activities.db'
  const dbPath = `${FileSystem.documentDirectory}SQLite/${name}`;
  const fileInfo = await FileSystem.getInfoAsync(dbPath);

  if(!fileInfo.exists) {
    const dbAsset = require('@/assets/' + name)
    const dbUri = Asset.fromModule(dbAsset).uri;
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbPath);
  }
}

function useDB(){
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadDatabase()
      .then (() => setLoaded(true));
  }, [])

  return { loaded };
}

export function DatabaseProvider({ children }: {children: React.ReactNode}) {
  const { loaded } = useDB();

  if (!loaded) {
    return null;
  }

  return (
    <Suspense fallback={<view></view>}>
      <SQLite.SQLiteProvider databaseName='activities.db'>
      {children}
      </SQLite.SQLiteProvider>
    </Suspense>
  );
}