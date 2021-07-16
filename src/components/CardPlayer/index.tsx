import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';

import BackgroundCardPlayer from '../BackgroundCardPlayer';
import CardInfo from '../CardInfo';

import { styles } from './styles';

import shieldTeam from '../../assets/Escudos/Palmeiras.png';
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
        <BackgroundCardPlayer>
            <View style={styles.position}>
                <ScrollView style={styles.container}>
                    <View style={styles.imageDetails}>
                        <View style={styles.identificator}>
                            <View style={styles.containerFlags}>
                                <Image source={shieldTeam} style={styles.flags} resizeMode="contain" />
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
                    </View>

                    <View style={styles.cards}>
                        <CardInfo mainInfo={920} media={90} title="Cartoletas" symbol="C$" />
                        <CardInfo mainInfo={1076} media={546} title="Pontos" />
                    </View>

                </ScrollView>
            </View>
        </BackgroundCardPlayer>
    );
}