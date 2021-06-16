import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";

// npm i @react-navigation/bottom-tabs react-native-elements react-native-screens @react-navigation/native
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import chooser from "./Firstscreen";

const image = {
  uri: "https://static.wixstatic.com/media/4cbe8d_f1ed2800a49649848102c68fc5a66e53~mv2.gif",
};

var mallDict = {
  0: "No Mall Selected",
  1: "Ion Orchard",
  2: "Wisma Atria",
  3: "Ngee Ann City",
};

var storeDict = {
  a: "4 fingers crispy chicken",
  b: "7-Eleven",
  c: "Best Denki",
  d: "Cartier",
  e: "Challenger",
  f: "Chanel",
  g: "Cotton On Body",
  h: "Din Tai Fung",
  i: "Famous Amos",
  j: "Fila",
  k: "Forever New",
  l: "Garmin",
  m: "Imperial Treausre Fine Shanghai Cuisine",
  n: "Kanshoku Ramen Bar",
  o: "Lacoste",
  p: "Louis Vuitton",
  q: "Mango",
  r: "Omega",
  s: "Rolex",
  t: "Seiko",
  u: "Superdry",
  v: "Tailored Fashions",
  w: "Tampopo Ramen",
  x: "Typo",
  y: "Yanmi Yogurt",
  0: "No selection",
};

var storeToMall = {
  a: [1],
  b: [1, 2],
  c: [3],
  d: [1, 3],
  e: [1],
  f: [1, 3],
  g: [1, 2],
  h: [2],
  i: [2],
  j: [3],
  k: [2],
  l: [2],
  m: [3],
  n: [1],
  o: [2],
  p: [1, 3],
  q: [1, 2],
  r: [1],
  s: [1],
  t: [3],
  u: [3],
  v: [3],
  w: [3],
  x: [2],
  y: [2],
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const history = [
  {
    date: "12 June 2021",
    cases: Math.floor(Math.random() * 5) + 1,
  },
  {
    date: "10 June 2021",
    cases: Math.floor(Math.random() * 10) + 1,
  },
  {
    date: "5 June 2021",
    cases: Math.floor(Math.random() * 20) + 1,
  },
];

const history2 = [
  {
    date: "8 June 2021",
    cases: Math.floor(Math.random() * 10) + 1,
  },
  {
    date: "4 June 2021",
    cases: Math.floor(Math.random() * 10) + 1,
  },
  {
    date: "1 June 2021",
    cases: Math.floor(Math.random() * 20) + 1,
  },
  {
    date: "28 May 2021",
    cases: Math.floor(Math.random() * 20) + 1,
  },
];

const history3 = [
  {
    date: "14 June 2021",
    cases: Math.floor(Math.random() * 5) + 1,
  },
  {
    date: "7 June 2021",
    cases: Math.floor(Math.random() * 10) + 1,
  },
];

var dict = {};
dict[1] = history;
dict[2] = history2;
dict[3] = history3;

const Table = () => {
  const { mallName, storeName } = current.params;
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title numeric>Cases</DataTable.Title>
      </DataTable.Header>

      {dict[mallName].map((hist) => (
        <DataTable.Row>
          <DataTable.Cell>{hist.date}</DataTable.Cell>
          <DataTable.Cell numeric>{hist.cases}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

function TabA() {
  var count = Math.floor(Math.random() * 1000) + 1;
  var level = count > 500;
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Estimated Count:
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
      <Text style={styles.text}>
        Past Cases for
        <Text style={styles.malltext}> {mallDict[mallName]}</Text>
      </Text>
      <Table />
      <chooser />
    </View>
  );
}
var current;

const Alt_Table = () => {
  const { mallName, storeName } = current.params;
  var places = [];

  var keys = storeToMall[storeName];
  if (storeName === undefined || keys === undefined) {
    places.push("Please select a store.");
  } else {
    for (var i = 0; i < keys.length; i++) {
      if (mallDict[keys[i]] !== mallDict[mallName]) {
        places.push(mallDict[keys[i]]);
      }
    }
  }

  if (places.length === 0) {
    places.push(
      "There are no other alternatives. Please select a different outlet"
    );
  }
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Places</DataTable.Title>
      </DataTable.Header>

      {places.map((place) => (
        <DataTable.Row>
          <DataTable.Cell>{place}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

function TabC({ route, navigator }) {
  const { mallName, storeName } = current.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alternative Places</Text>
      <Alt_Table />
      <chooser />
    </View>
  );
}

function ReactNavigationBottomTabs({ route, navigator }) {
  current = route;
  /*  const { name } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(name)}</Text>
    </View>
  )*/

  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: "green", inactiveTintColor: "grey" }}
    >
      <Tab.Screen
        name="Headcount"
        component={TabA}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={TabB}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Alternatives"
        component={TabC}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
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
    backgroundColor: "#fac8f8",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
  malltext: {
    fontSize: 40,
    fontWeight: "bold",
    color: "blue",
  },
  danger: {
    color: "red",
  },
  normal: {
    color: "green",
  },
  head: {
    height: 40,
    backgroundColor: "grey",
  },
  tabletext: {
    margin: 6,
  },
});
