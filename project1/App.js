import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form, Col, Button } from 'react-bootstrap';

// npm i @react-navigation/bottom-tabs react-native-elements react-native-screens @react-navigation/native
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

function TabA() {
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
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function ReactNavigationBottomTabs() {
  return (
    <NavigationContainer>
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