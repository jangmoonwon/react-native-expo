import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>todolist</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "300",
    color: "#3f4441",
  },
});
