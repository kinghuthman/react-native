import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there!';
  const greetingBlock = <Text>Hellllooooo</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Hello Huthman King!!</Text>
      <Text>{greeting}</Text>
      {greetingBlock}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginLeft: 15,
  },
});

export default ComponentsScreen;
