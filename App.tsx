import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Raleway_500Medium, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { SourceSansPro_400Regular } from '@expo-google-fonts/source-sans-pro';

import Routes from './src/Routes';

export default function App() {
    const [fontsLoaded] = useFonts({
        Raleway_500Medium,
        Raleway_700Bold,
        SourceSansPro_400Regular
    });

    if(!fontsLoaded){
        return <AppLoading />
    }

    return (
        <>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor='transparent' 
                translucent 
            />
            <Routes />
        </>
    );
}