import React, { useState } from "react";
import { SafeAreaView, Text, View } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Feather, FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps){

    const [ isClicked, setIsClicked ] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.leftDetails}>
                <RectButton style={styles.button}>
                    <Feather name="menu" size={24} color="white" />
                </RectButton>
                <Text style={styles.title}>
                    { title }
                </Text>
            </View>
            <FontAwesome name="bell" size={24} color="white" />
        </SafeAreaView>
    );
}