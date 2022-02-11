import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Personajes from "./src/Personajes";
import EpisodesGeneral from "./src/EpisodesGeneral";
import Location from "./src/Location";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator()

export default function AppBottomNavigator() {
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "Personajes":
                iconName = 'account-group'
                break;
            case "Episodes":
                iconName = 'youtube-tv'
                break;
            case "Location":
                iconName = "earth"
                break;
            

        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={30}
                color={color}
            />
        );
    }


    return (
        <Tab.Navigator
            initialRouteName='Personajes'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color)
            })}
        >

            <Tab.Screen name="Personajes" component={Personajes} options={{ headerShown: false }} />
            <Tab.Screen name="Episodes" component={EpisodesGeneral} options={{ headerShown: false }} />
            <Tab.Screen name="Location" component={Location} options={{ headerShown: false }} />

        </Tab.Navigator>

    );
}