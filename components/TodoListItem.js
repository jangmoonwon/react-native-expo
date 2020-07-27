import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";


const TodoListItem = () => {
  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity>
        <View style={styles.completeCircle}>
          <AntDesign name="checkcircle" size={27} color="black" />
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, styles.strikeText]}>첫 번째 할 일</Text>
      <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.buttonText}>
    <AntDesign name="minuscircleo" size={27} color="#ff7272" />
    </Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoText: {
    flex: 5,
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circleBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#ff7272",
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    flex: 5,
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 20,
    width: 100,
    color: "#bbb",
    textDecorationLine: "line-through",
  },
  unstrikeText: {
    color: "#29323c",
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
