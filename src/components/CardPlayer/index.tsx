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
        <View style={styles.position}>
            <ScrollView style={styles.container}>
                <View style={styles.imageDetails}>
                    <View style={styles.identificator}>
                        <View style={styles.containerFlags}>
                            <Image source={nationalityFlag} style={styles.flags} resizeMode="contain" />
                            <Image 
                                source={nationalityFlag} 
                                style={[styles.flags, { marginLeft: -10, zIndex: -1}]} 
                                resizeMode="contain" 
                            />
                        </View>
                        <Text style={styles.namePlayer}>
                            Gustavo Scarpa
                        </Text>
                        <Text style={styles.positionPlayer}>
                            MEI - Palmeiras
                        </Text>
                    </View>
                    <View style={styles.imagePlayer}>
                        <Image source={Player} style={styles.player} resizeMode="contain" />
                    </View>

                    <View style={styles.cards}>
                        {/* Card preco */}
                        {/* Card pontos */}
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}