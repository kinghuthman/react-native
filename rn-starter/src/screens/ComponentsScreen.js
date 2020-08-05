import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Huthman King';
  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subHeader}>My name is {name}</Text>
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
