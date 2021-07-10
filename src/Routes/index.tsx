import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import ContainerRoutes from './routes';

export default function Routes(){
    return (
        <NavigationContainer>
            <ContainerRoutes />
        </NavigationContainer>
    );
}