import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
     <TodoListItem />
    </ScrollView>
  );
};
export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

