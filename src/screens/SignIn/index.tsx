import React, { useState } from "react";
import { SafeAreaView, Image, View, Text, TextInput, ScrollView } from 'react-native';

import Background from "../../components/Background";
import Button from '../../components/Button';

import { theme } from "../../global/styles/theme";
import { styles } from './styles';

import IllustrationImg from '../../assets/init.png';

export default function SignIn() {

    // const [username, setUsername] = useState('');

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                    <View style={styles.content}>

                        <Image source={IllustrationImg} resizeMode="contain" style={styles.image} />

                        <View style={styles.greetings}>
                            <Text style={styles.welcome}>
                                Sejá bem-vindo cartoleiro
                            </Text>
                        </View>
                        <View style={styles.fields}>
                            <TextInput 
                                placeholder="Qual o nome da sua seleção?"
                                style={styles.team}
                                placeholderTextColor={theme.colors.white}
                            />
                            <TextInput 
                                placeholder="Senha"
                                style={styles.team}
                                placeholderTextColor={theme.colors.white}
                                maxLength={8}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button title='Entrar' activeOpacity={.5} />
                        </View>
                    </View>
            </SafeAreaView>
        </Background>
    );
}