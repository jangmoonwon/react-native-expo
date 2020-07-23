import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function List() {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={styles.listText}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ color: isHovered ? "red" : "black" }}
      >
        listitem
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  listText: {
    fontSize: 20,
  },
});
