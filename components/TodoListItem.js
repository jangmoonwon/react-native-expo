import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const TodoListItem = ({ textValue, id, checked, onRemove, onToggle }) => {
  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <AntDesign name="checkcircle" size={30} color="#bbb" />
          </View>
        ) : (
          <View style={styles.circle}>
           <FontAwesome5 name="circle" size={30} color="black" />
          </View>
        )}
      </TouchableOpacity>
      <Text
        style={[styles.text, checked ? styles.strikeText : styles.unstrikeText]}
      >
        {textValue}
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={onRemove(id)}>
          <AntDesign name="minuscircleo" size={30} color="#ff7272" />
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
  text: {
    flex: 5,
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 20,
    width: 100,
  },
  strikeText: {
    flex: 5,
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 20,
    width: 100,
    color: "#bbb",
    textDecorationLine: "line-through",
  },
  unstrikeText: {
    color: "#29323c",
  },
  circle: {
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },

  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
