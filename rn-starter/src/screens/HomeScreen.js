import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Manchester United</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Ole At the Wheel?"
      />
      <Button title="Players" onPress={() => navigation.navigate("List")} />
      <Button title="Images" onPress={() => navigation.navigate("Images")} />
      <Button title="Counter" onPress={() => navigation.navigate("Counter")} />
      <Button title="Color" onPress={() => navigation.navigate("Color")} />
      <Button title="Square" onPress={() => navigation.navigate("Square")} />
      <Button title="Text Input" onPress={() => navigation.navigate("Text")} />
      <Button title="Box" onPress={() => navigation.navigate("Box")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
