import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Personajes from "./src/Personajes";
import EpisodesGeneral from "./src/EpisodesGeneral";
import Location from "./src/Location";

const Tab = createBottomTabNavigator()

export default function AppBottomNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Personajes" component={Personajes} options={{headerShown: false}}/>
            <Tab.Screen name="Episodes" component={EpisodesGeneral} options={{headerShown: false}}/>
            <Tab.Screen name="Location" component={Location} options={{headerShown: false}}/>
        </Tab.Navigator>

    );
}