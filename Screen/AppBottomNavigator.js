import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Personajes from "./src/Personajes";

const Tab = createBottomTabNavigator()

export default function AppBottomNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Personajes" component={Personajes} options={{headerShown: false}}/>
        </Tab.Navigator>

    );
}