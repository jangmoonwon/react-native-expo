import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

function UseTextInput() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder={"input your task"}
          autoCompleteType={off}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default UseTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "transparent",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
    flex: 1,
    fontSize: 22,
  },
});
