import React, { useState } from "react";
import { Button, View, StyleSheet, Switch } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { propTypes } from "react-bootstrap/esm/Image";
import {Picker} from '@react-native-picker/picker';

export default function wismaMenu(locationOutlet, setSelectedOutlet) {
    return (
        <Picker
            selectedValue={locationOutlet}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) => setSelectedOutlet(itemValue)}
            >
            <Picker.Item label="Choose Something" value="0" />;
            <Picker.Item label="7-Eleven" value="b" />;
            <Picker.Item label="Cotton On Body" value="g" />;
            <Picker.Item label="Din Tai Fung" value="h" />;
            <Picker.Item label="Famous Amos" value="i" />;
            <Picker.Item label="Forever New" value="k" />;
            <Picker.Item label="Garmin" value="l" />;
            <Picker.Item label="Lacoste" value="o" />;
            <Picker.Item label="Mango" value="q" />;
            <Picker.Item label="Typo" value="x" />;
            <Picker.Item label="Yanmi Yogurt" value="y" />;
            </Picker>

    );
}