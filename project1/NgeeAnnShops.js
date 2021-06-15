import React, { useState } from "react";
import { Button, View, Picker, StyleSheet, Switch } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { propTypes } from "react-bootstrap/esm/Image";

export default function NgeeAnnMenu(locationOutlet, setSelectedOutlet) {
    return (
        <Picker
            selectedValue={locationOutlet}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) => setSelectedOutlet(itemValue)}
        >
            <Picker.Item label="Choose Something" value="0" />;
            <Picker.Item label="Best Denki" value="c" />;
            <Picker.Item label="Cartier" value="d" />;
            <Picker.Item label="Chanel" value="f" />;
            <Picker.Item label="Fila" value="j" />;
            <Picker.Item label="Imperial Treasure Fine Shanghai Cuisine" value="m" />;
            <Picker.Item label="Louis Vuitton" value="p" />;
            <Picker.Item label="Seiko" value="t" />;
            <Picker.Item label="Superdry" value="u" />;
            <Picker.Item label="Tailored Fashions" value="v" />;
            <Picker.Item label="Tampopo Ramen" value="w" />;
        </Picker>

    );
}