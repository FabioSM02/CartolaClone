import React, { useState } from "react";
import { SafeAreaView, Image, View, Text, TextInput, ScrollView } from 'react-native';

import { styles } from './styles';

export default function SignIn() {

    // const [username, setUsername] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.greetings}>
                    <Text style={styles.welcome}>
                        Sejá bem-vindo cartoleiro
                    </Text>
                </View>
                <View style={styles.fields}>
                    <TextInput 
                        placeholder="qual o nome da sua seleção?"
                        style={styles.team}
                    />
                    <TextInput 
                        placeholder="senha"
                        style={styles.password}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}