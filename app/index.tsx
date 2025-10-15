import { Link, router } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#1ED2AF",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
  }
})