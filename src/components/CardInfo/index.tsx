import React from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface CardInfo {
    title: string;
    symbol?: string;
    mainInfo: number;
    media: number;
}

export default function CardInfo({ title, symbol, mainInfo, media } : CardInfo){

    const { green400 } = theme.colors;

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.inline}>
                    <Text style={styles.symbol}>
                        { symbol }
                    </Text>
                    <Text style={styles.main}>
                        { mainInfo }
                    </Text>
                </View>
                <View style={styles.infoGreen}>
                    <Text style={styles.media}>
                        { media }
                    </Text>
                    <Feather name="arrow-up-right" size={10} color={green400} /> 
                    {/* { 
                        media = 'Cartoletas' && (
                            <Feather name="arrow-up-right" size={10} color={green400} /> 
                        ) 
                    } */}
                </View>
            </View>
            <Text style={styles.title}>
                { title }
            </Text>
        </View>
    );
}