import { Text, View, StyleSheet } from "react-native";

type ActivityItemProps = {
  steps: number;
  date: number;
};

export default function Activity({ steps, date }: ActivityItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {steps} steps on {new Date(date).toLocaleDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    padding: 16,
    marginVertical: 8, // spacing between items
    borderRadius: 8,
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});
