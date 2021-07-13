import React from "react";
import { View, Text, Image } from 'react-native';

import { styles } from "./styles";

import playerTeamImg from '../../assets/champions.png';

interface CardProps {
    nameTeam: string;
    heritage: number;
    lastScore: number;
    total: number;
}

export default function Card(){
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <View style={styles.team}>
                    <Image source={playerTeamImg} style={styles.shield} />
                    <Text style={styles.nameTeam}>
                        Nome do time
                    </Text>
                </View>
                <View style={styles.detailsTeam}>
                    <View style={styles.title}>
                        <Text style={styles.category}>
                            PATRIMONIO
                        </Text>
                        <Text style={styles.title}>
                            ULTIMA PONTUAÇÃO
                        </Text>
                        <Text style={styles.title}>
                            TOTAL
                        </Text>
                    </View>
                    <View style={styles.results}>
                        <Text style={styles.teamData}>
                            C$ 145.43
                        </Text>
                        <Text style={styles.teamData}>
                            91.43
                        </Text>
                        <Text style={styles.teamData}>
                            642.13
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}