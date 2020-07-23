import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import List from "./components/List";
import Button from "./components/Button";
import TextInput from "./components/TextInput";

const DATA = [
  {
    id: "tester_1",
    title: "Item_1",
  },
  {
    id: "tester_2",
    title: "Item_2",
  },
  {
    id: "tester_3",
    title: "Item_3",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.title === selectedId ? "red" : "#fff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor, color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <List />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button />
      <TextInput />
      <StatusBar style={{ color: "black" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeecda",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "black",
  },
});
