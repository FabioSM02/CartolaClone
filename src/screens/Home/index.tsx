import React from "react";
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Header from "../../components/Header";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export default function Home(){

    const { gray100 } = theme.colors;

    return (
        <View style={styles.container}>
            <Header title="Dashbord" />
            <View style={styles.gridCalendar}>

                <View style={styles.price}>
                    <Text style={styles.title}>
                        PREÇO DO TIME
                    </Text>
                    <View style={styles.teamPrice}>
                        <Text style={styles.symbol}>
                            C$
                        </Text>
                        <Text style={styles.realTeamPrice}>
                            131.20
                        </Text>
                    </View>
                </View>

                <View style={styles.timeCloseMarket}>
                    <Text style={styles.title}>
                        MERCADO FECHA EM
                    </Text>
                    <View style={styles.containerDateHour}>
                        <Text style={styles.realHour}>
                            10/07 - 16:00
                        </Text>
                        <AntDesign name="infocirlce" size={12} color={ gray100 } style={styles.icon} />
                    </View>
                </View>

                <View style={styles.Money}>
                    <Text style={styles.title}>
                        VOCÊ AINDA TEM
                    </Text>
                    <View style={styles.remainingCashContainer}>
                        <Text style={styles.symbol}>
                           C$ 
                        </Text>
                        <Text style={styles.remainingCash}>
                            150.79
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}