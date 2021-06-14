import React, { useState } from "react";
import { Button, View, Picker, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { propTypes } from "react-bootstrap/esm/Image";

export default function chooser({ navigation: { navigate } }) {
  const [selectedValue, setSelectedValue] = useState("java");


  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      
      <Button
        title="Go to Profile"
        onPress={() => navigate('Profile', { screen: 'Headcount'})} //additional of a button to navigate elsewhere
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
