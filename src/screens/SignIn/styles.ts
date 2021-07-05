import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 

    content: {
        marginTop: -10,
        width: '100%',
    },

    image: {
        width: '100%'
    },

    greetings: {
        marginTop: -75,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    welcome: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.white,
        fontSize: 20
    },

    fields: {
        marginTop: 15,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },

    team: {
        height: 45,
        width: '80%',
        fontFamily: theme.fonts.title500,
        color: theme.colors.gray100,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray100,
        paddingLeft: 10,
        marginTop: 15,
        marginBottom: 45
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});