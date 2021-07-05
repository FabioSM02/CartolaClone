import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps{
    title: string;

}

export default function Button({ title, ...rest }: ButtonProps){
    return (
        <TouchableOpacity style={styles.button} { ...rest } >
            <Text style={styles.title}> 
                { title } 
            </Text>
        </TouchableOpacity>
    );
}