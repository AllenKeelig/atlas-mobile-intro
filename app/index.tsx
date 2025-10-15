import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { FlashList } from "@shopify/flash-list";

export default function Index() {
  const { activities, deleteAllActivities } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <FlashList
        data={activities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.steps} steps on {new Date(item.date).toLocaleDateString()}
          </Text>
        )}
        ListEmptyComponent={
          <Text style={{ marginTop: 20 }}>No activities yet.</Text>
        }
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
    marginTop: 30,
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
    marginBottom: 60,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
