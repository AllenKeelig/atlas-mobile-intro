import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function AddActivityScreen() {
  return (
    <View>
      <Text>AddActivityScreen</Text>
      <Link style={styles.button} href={"/"} replace>
        <Text style={styles.buttonText}>Go back</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d21e1eff",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
  }
})