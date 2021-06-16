import React, { useState } from "react";
import { Button, ImageBackground, View, StyleSheet, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { propTypes } from "react-bootstrap/esm/Image";
import ionMenu from "./ionShops.js";
import wismaMenu from "./wismaShops.js";
import NgeeAnnMenu from "./NgeeAnnShops.js";
import { Picker } from "@react-native-picker/picker";

export default function chooser({ navigation }) {
  const [locationId, setSelectedId] = useState("1");
  const [locationOutlet, setSelectedOutlet] = useState("0");
  const image = {
    uri: "https://mcdn.wallpapersafari.com/medium/95/98/3vRqDI.jpg",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.text_box}>
          <Text style={styles.textActual}>Please select a shopping center</Text>
        </View>
        <View style={styles.dropdownBox}>
          <Picker
            selectedValue={locationId}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) => {
              setSelectedOutlet("0");
              setSelectedId(itemValue);
            }}
          >
            <Picker.Item label="Ion Orchard" value="1" />
            <Picker.Item label="Wisma Atria" value="2" />
            <Picker.Item label="Ngee Ann City" value="3" />
          </Picker>
        </View>
        <View style={styles.text_box}>
          <Text style={styles.textActual}>Which store are you visiting?</Text>
        </View>
        <View style={styles.dropdownBox}>
          {(() => {
            switch (locationId) {
              case "1":
                return ionMenu(locationOutlet, setSelectedOutlet);

              case "2":
                return wismaMenu(locationOutlet, setSelectedOutlet);

              case "3":
                return NgeeAnnMenu(locationOutlet, setSelectedOutlet);
            }
          })()}
        </View>
        <View style={styles.button_format}>
          <Button
            color="orange"
            title="View Recommendations"
            onPress={() =>
              navigation.navigate("Profile", {
                mallName: locationId,
                storeName: locationOutlet,
              })
            } //additional of a button to navigate elsewhere
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "fill",
    justifyContent: "center",
  },
  dropdownBox: {
    alignItems: "center",
    padding: "1%",
  },
  button_format: {
    alignItems: "center",
    padding: "3%",
  },
  text_box: {
    fontWeight: "bold",
    fontSize: 40,
    alignItems: "center",
    padding: "1%",
  },
  textActual: {
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
    padding: "1%",
  },
});
