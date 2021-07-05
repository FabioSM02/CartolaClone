import { StyleSheet } from 'react-native';

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    button: {
        width: '70%',
        height: 45,
        backgroundColor: theme.colors.orange100,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        flex: 1,
        color: theme.colors.white,
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
    }
});