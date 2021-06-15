import React, { useState } from "react";
import { Button, View, Picker, StyleSheet, Switch } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { propTypes } from "react-bootstrap/esm/Image";

export default function ionMenu(locationOutlet, setSelectedOutlet) {
    return (
        <Picker
        selectedValue={locationOutlet}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setSelectedOutlet(itemValue)}
    >
        <Picker.Item label="Choose Something" value="0" />;
        <Picker.Item label="Fuck" value="f" />;
        <Picker.Item label="This" value="t" />;
        <Picker.Item label="Nonsense" value="s" />;
    </Picker>

    );
}