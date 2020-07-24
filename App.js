import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Todolist</Text>
      <View style={styles.cardContainer}>
        <TodoList />
        <TodoInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf4f4",
  },
  appTitle: {
    color: "#ff7272",
    fontSize: 40,
    marginTop: 10,
    marginBottom: 30,
    fontWeight: "300",
    textAlign: "center",
    backgroundColor: "#faf4f4",
  },
  cardContainer: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
