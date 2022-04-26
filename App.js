import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/Login";

import Home from "./pages/Home";

import Checkin from "./pages/Checkin";

import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Checkin" component={Checkin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
