import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Button = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
      activeOpacity={0.4}
      onPress={()=> alert('Hello, world')}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: "#ad9d9d",
    borderRadius: 4.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "400",
    color: "#fff",
  },
});
