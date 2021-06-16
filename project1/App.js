import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

// npm i @react-navigation/bottom-tabs react-native-elements react-native-screens @react-navigation/native
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  chooser from './Firstscreen';

var mallDict = {
  0: "No Mall Selected",
  1: "Ion Orchard",
  2: "Wisma Atria",
  3: "Ngee Ann City"
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Table = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title numeric>Cases</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>12 June 2021</DataTable.Cell>
        <DataTable.Cell numeric>5</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>10 June 2021</DataTable.Cell>
        <DataTable.Cell numeric>9</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

function TabA() {
  var count = 9999;
  var level = (count > 5000)
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estimated Count: 
        <Text style={level ? styles.danger : styles.normal}> {count}</Text>
      </Text>
      <chooser />
    </View>
  );
}

function TabB() {

  const { mallName, storeName } = current.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Past Cases</Text>
      <Text style={styles.text}>Similar Places {JSON.stringify(mallDict[mallName])} {JSON.stringify(storeName)}</Text>
      <Table />
      <chooser />
    </View>
  );
}
var current;
function TabC({route, navigator}) {

  const { mallName, storeName } = current.params;
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Similar Places {JSON.stringify(mallDict[mallName])} {JSON.stringify(storeName)}</Text>
      <chooser />
    </View>
  );
}


function ReactNavigationBottomTabs( {route, navigator} ) {

current = route;
/*  const { name } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(name)}</Text>
    </View>
  )*/
  
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
        <Tab.Screen
          name='Alternatives'
          component={TabC}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='list' color={color} size={size} />
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
  danger: {
    color: 'red'
  },
  normal: {
    color: 'green'
  },
  head: {
    height: 40,
    backgroundColor: 'grey'
  },
  tabletext: {
    margin: 6
  }
});