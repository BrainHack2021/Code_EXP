import React, { useState } from "react";
import { Button, View, Picker, StyleSheet, Switch } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { propTypes } from "react-bootstrap/esm/Image";

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
          <Picker.Item label="Taka" value="3" />
        </Picker>
      </View>
      <View style={styles.dropdownBox}>
        {(() => {
          
          switch (locationId) {
            case "1":
              return (
                <Picker
                  selectedValue={locationOutlet}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue) => setSelectedOutlet(itemValue)}
                >
                  <Picker.Item label="Choose something" value="0" />;
                  <Picker.Item label="Fuck" value="f" />;
                  <Picker.Item label="This" value="t" />;
                  <Picker.Item label="Nonsense" value="s" />;
                </Picker>
              );

            case "2":
              return (
                <Picker
                  selectedValue={locationOutlet}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue) => setSelectedOutlet(itemValue)}
                >
                  <Picker.Item label="Choose something" value="0" />;
                  <Picker.Item label="Take me 2 hrs knn wtf" value="x" />;
                </Picker>
              );

            case "3":
              return (
                <Picker
                  selectedValue={locationOutlet}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue) => setSelectedOutlet(itemValue)}
                >
                  <Picker.Item label="Choose something" value="0" />;
                  <Picker.Item label="Jesussss" value="fml" />;
                </Picker>
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
