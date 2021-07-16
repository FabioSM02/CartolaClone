import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

type BackgroundCardPlayer = {
    children: ReactNode;
}

export default function BackgroundCardPlayer({ children } : BackgroundCardPlayer){

    const { white, gray50 } = theme.colors;

    return (
        <LinearGradient colors={[gray50, white]} style={styles.container}>
            { children }
        </LinearGradient>
    );
}