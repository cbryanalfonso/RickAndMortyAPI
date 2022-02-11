import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBottomNavigator from "./AppBottomNavigator";
import PersonajeIndividual from "./src/PersonajeIndividual";
import Residents from "./vistas/Residents";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppBottomNavigator" component={AppBottomNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="PersonajeIndividual" component={PersonajeIndividual} options={{ headerShown: false }} />
        <Stack.Screen name="Residents" component={Residents} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}