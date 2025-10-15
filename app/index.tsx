import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import SwipeableActivity from "@/components/swipeableActivity";

export default function Index() {
  const { activities, deleteAllActivities, deleteActivity } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <FlashList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SwipeableActivity
            id={item.id}
            steps={item.steps}
            date={item.date}
            onDelete={deleteActivity}
          />
        )}
      />

      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>

      <Pressable style={[styles.button, styles.deleteButton]} onPress={deleteAllActivities}>
        <Text style={styles.buttonText}>Delete All</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: "#1ED2AF",
    padding: 16,
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: "#D9534F",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
