import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import List from "./components/List";
import Test from "./components/Test";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <List />
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#eeecda",
  },
});