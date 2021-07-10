import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight() - 25,
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        backgroundColor: theme.colors.orange200
    },

    leftDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: 10
    },

    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.white,
        paddingLeft: 10
    }
});