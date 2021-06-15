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
        <Picker.Item label="Choose A Shop" value="0" />;
        <Picker.Item label="4 Fingers Crispy Chicken" value="a" />;
        <Picker.Item label="7-Eleven" value="b" />;
        <Picker.Item label="Cartier" value="d" />;
        <Picker.Item label="Chanel" value="f" />;
        <Picker.Item label="Challenger" value="e" />;
        <Picker.Item label="Cotton On Body" value="g" />;
        <Picker.Item label="Kanshoku Ramen Bar" value="n" />;
        <Picker.Item label="Louis Vuitton" value="p" />;
        <Picker.Item label="Mango" value="q" />;
        <Picker.Item label="Omega" value="r" />;
        <Picker.Item label="Rolex" value="s" />;
    </Picker>

    );
}