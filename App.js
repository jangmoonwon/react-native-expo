import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import TodoInput from "./components/TodoInsert";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), textValue: text, checked: false },
    ]);
  };

  const onRemove = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Todolist</Text>
      <View style={styles.cardContainer}>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <TodoInput onAddTodo={addTodo} />
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
