import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

// npm i @react-navigation/bottom-tabs react-native-elements react-native-screens @react-navigation/native
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  chooser from './Firstscreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const history = [
    {
      date: "12 June 2021",
      cases: 5,
    },
    {
      date: "10 June 2021",
      cases: 8,
    },
    {
      date: "5 June 2021",
      cases: 12,
    },
];

const history2 = [
  {
    date: "11 June 2021",
    cases: 4,
  },
  {
    date: "10 June 2021",
    cases: 5,
  },
  {
    date: "5 June 2021",
    cases: 19,
  },
];

var dict = {};
dict[1] = history;
dict[2] = history2;

const Table = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title numeric>Cases</DataTable.Title>
      </DataTable.Header>
      
      {dict[2].map((hist) => (
        <DataTable.Row>
          <DataTable.Cell>{hist.date}</DataTable.Cell>
          <DataTable.Cell numeric>{hist.cases}</DataTable.Cell>
        </DataTable.Row>
      ))}
      
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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Past Cases</Text>
      <Table />
      <chooser />
    </View>
  );
}

function TabC({route, navigator}) {

  const { mallName, storeName } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Similar Places {JSON.stringify(mallName)} {JSON.stringify(storeName)}</Text>
      <chooser />
    </View>
  );
}



function ReactNavigationBottomTabs( {route, navigator} ) {


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