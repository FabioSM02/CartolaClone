import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';

import { styles } from './styles';

// import shieldTeam from '.....';
import nationalityFlag from '../../assets/Bandeiras/brasil.png';
import Player from '../../assets/Jogador/scarpa.png';

interface Player {
    team: string;
    nationality: string;
    position: string;
    name: string;
    price: number;
    points: number;
    average: number;
}

export default function CardPlayer(){
    return (
        <ScrollView>
            <View style={styles.imageDetails}>
                <View>
                    <Image source={nationalityFlag} style={styles.team} />
                    <Image source={nationalityFlag} style={styles.nationality} />
                    <Text style={styles.namePlayer}>
                        Nome do jogador
                    </Text>
                    <Text style={styles.positionPlayer}>
                        ATA - Santos
                    </Text>
                </View>
                <View>
                    <Image source={Player} style={styles.player} />
                </View>

                <View style={styles.cards}>
                    {/* Card preco */}
                    {/* Card pontos */}
                </View>

            </View>
        </ScrollView>
    );
}