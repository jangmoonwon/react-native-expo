import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Test() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter new todo"
            autoCorrect={false} //* "자동고침 X" *//
          />
          <TouchableOpacity>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 0,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
    fontSize: 22,
  },
  addBtn: {
    color: "#4169E1",
  },
});
