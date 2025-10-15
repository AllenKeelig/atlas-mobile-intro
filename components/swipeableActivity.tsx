import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import Activity from "./Activity";
import Swipeable from "react-native-gesture-handler/Swipeable";

type SwipeableActivityProps = {
  steps: number;
  date: number;
  id: number;
  onDelete: (id: number) => void;
};

export default function SwipeableActivity({ steps, date, id, onDelete }: SwipeableActivityProps) {
  const ActionButton = () => (
    <Pressable style={styles.actionButton} onPress={() => onDelete(id)}>
      <Text style={styles.actionText}>Delete</Text>
    </Pressable>
  );

  return (
    <Swipeable
      renderRightActions={ActionButton}
      overshootRight={false} // prevent swipe from stretching beyond button
    >
      <View style={styles.container}>
        <Activity steps={steps} date={date} />
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    overflow: "hidden", // ensures the swipeable doesn't overflow
  },
  actionButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80, 
    height: "100%",
    borderRadius: 8,
  },
  actionText: {
    color: "white",
    fontWeight: "bold",
  },
});
