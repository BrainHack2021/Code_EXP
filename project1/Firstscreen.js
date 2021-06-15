import React, { useState } from "react";
import { Button, View, Picker, StyleSheet, Switch } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { propTypes } from "react-bootstrap/esm/Image";
import ionMenu from "./ionShops.js";
import wismaMenu from "./wismaShops.js";
import NgeeAnnMenu from "./NgeeAnnShops.js";

export default function chooser({ navigation }) {
  const [locationId, setSelectedId] = useState("1");
  const [locationOutlet, setSelectedOutlet] = useState('0');

  return (
    <View>
      <View style={styles.dropdownBox}>
        <Button
          color="orange"
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile', {
            screen: 'Alternatives',
            params: { mallName: locationId, storeName: locationOutlet },
          })} //additional of a button to navigate elsewhere
        />
        
        <Picker
          selectedValue={locationId}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => {
            setSelectedOutlet("0");
            setSelectedId(itemValue);}
          }
        >
          <Picker.Item label="Ion" value="1" />
          <Picker.Item label="Wisma" value="2" />
          <Picker.Item label="Ngee Ann City" value="3" />
        </Picker>
      </View>
      <View style={styles.dropdownBox}>
        {(() => {
          
          switch (locationId) {
            case "1":
              return (
                ionMenu(locationOutlet, setSelectedOutlet)
              );

            case "2":
              return (
                wismaMenu(locationOutlet, setSelectedOutlet)
              );

            case "3":
              return (
                NgeeAnnMenu(locationOutlet, setSelectedOutlet)
              );
          }
        })()}
      </View>
      <View style={styles.profileBox}>
        <Button
          color="orange"
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile", { screen: "Headcount" })} //additional of a button to navigate elsewhere
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownBox: {
    flex: 1,
    margin: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  profileBox: {
    flex: 1,
    paddingTop: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
