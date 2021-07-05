import React, { ReactNode } from "react";
import { View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from "../../global/styles/theme";
import { styles } from './styles';

interface BackgroundProps {
    children: ReactNode;
}

export default function Background({ children }: BackgroundProps){

    const { yellow600, primary } = theme.colors;

    return (
        <LinearGradient colors={[yellow600, primary]} style={styles.container}>
            { children }
        </LinearGradient>
    );
}