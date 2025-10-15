import { View, Text, StyleSheet } from "react-native";

export default function Activity({ activity }) {
  return (
    <View style={styles.item}>
      <Text style={styles.steps}>{activity.steps} steps</Text>
      <Text style={styles.date}>
        {new Date(activity.date).toLocaleDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  steps: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
