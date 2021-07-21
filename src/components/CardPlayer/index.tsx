import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import BackgroundCardPlayer from '../BackgroundCardPlayer';
import CardInfo from '../CardInfo';

import { theme } from '../../global/styles/theme';
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

    const { gray200 } = theme.colors;

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

                    <View style={styles.statistics}>
                        <MaterialCommunityIcons name="soccer-field" size={20} color={gray200} />
                        <Text style={styles.climbed}>
                            1.9220.850 cartoleiros escalaram.
                        </Text>
                    </View>

                    {/* MENU COMPONENT */}

                </ScrollView>
            </View>
        </BackgroundCardPlayer>
    );
}