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
    backgroundColor: "#FEF9E6",
  },
  button: {
    backgroundColor: "#1ED2AF",
    paddingVertical: 20, // taller buttons
    width: "100%",       // touch sides of screen
    alignItems: "center",
    borderRadius: 0,     // remove rounding so buttons touch each other
  },
  deleteButton: {
    backgroundColor: "#D9534F",
    marginTop: 0, // remove spacing between buttons
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
