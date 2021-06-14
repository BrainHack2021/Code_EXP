import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, } from 'react-native';
import { Form, Col, Button } from 'react-bootstrap';

// npm i @react-navigation/bottom-tabs react-native-elements react-native-screens @react-navigation/native
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  chooser from './Firstscreen';

const Stack = createStackNavigator();

function TabA() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estimated Count:</Text>
    </View>
  );
}
function TabB() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Past Cases</Text>
      <chooser />
    </View>
    
  );
}

const Tab = createBottomTabNavigator();

function ReactNavigationBottomTabs() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen
          name='Headcount'
          component={TabA}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='person' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='History'
          component={TabB}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='history' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={chooser} />
        <Stack.Screen name="Profile" component={ReactNavigationBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});