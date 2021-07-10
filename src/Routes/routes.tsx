import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import Home from "../screens/Home";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export default function ContainerRoutes(){
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.primary
                }
            }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}