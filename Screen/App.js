import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBottomNavigator from "./AppBottomNavigator";

const Stack = createNativeStackNavigator()

export default function App(){
    return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="AppBottomNavigator" component={AppBottomNavigator} options={{headerShown: false}}/>
          </Stack.Navigator> 
      </NavigationContainer>
    );
}