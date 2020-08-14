import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Paul Pogba", age: "20" },
    { name: "Jesse Lingard", age: "45" },
    { name: "Bruno Fernades", age: "32" },
    { name: "Anthony Martial", age: "27" },
    { name: "Brandon Williams", age: "20" },
    { name: "Daniel James", age: "24" },
    { name: "Fred", age: "50" },
    { name: "Matic", age: "22" },
    { name: "Bailly", age: "35" },
    { name: "Marcus Rashord", age: "54" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === { item: {name: 'Friend #1'}, index: 0}
        return (
          <View>
            <Text style={styles.textStyle}>
              {item.name} - Matches {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
