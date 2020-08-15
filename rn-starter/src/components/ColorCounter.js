import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => (
  <View>
    <Text>{color}</Text>
    <Button onPress={() => onIncrease()} title={`INCREASE ${color}`} />
    <Button onPress={() => onDecrease()} title={`DECREASE ${color}`} />
  </View>
);

const styles = StyleSheet.create({});

export default ColorCounter;
