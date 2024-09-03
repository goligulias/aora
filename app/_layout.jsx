import { React } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Oepn up App.js to star working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
