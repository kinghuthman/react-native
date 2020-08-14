import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Paul Scholes";
  return (
    <View>
      <Text style={styles.header}>Ole at the wheel?</Text>
      <Text style={styles.subHeader}>Analysis by {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
    marginLeft: 15,
  },
  subHeader: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 75,
  },
});

export default ComponentsScreen;
