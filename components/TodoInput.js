import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TodoInput() {
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={120}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter new todo"
            placeholderTextColor="#bbb"
            autoCorrect={false}
          />
          <TouchableOpacity>
            <AntDesign name="plus" size={28} color="#ff7272" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginLeft: 17,
    marginRight: 17,
  },
  input: {
    backgroundColor: "transparent",
    paddingLeft: 10,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#bbb",
    borderBottomWidth: 2.3,
  },
  inputText: {
    flex: 1,
    fontSize: 23,
  },
});
