import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 

    content: {
        marginTop: 90,
        width: '100%',
    },

    greetings: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    welcome: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.orange100,
        fontSize: 20
    },

    fields: {
        marginTop: 15,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },

    team: {
        borderWidth: 1,
        borderColor: theme.colors.gray200,
        height: 45,
        borderRadius: 8,
        paddingLeft: 10,
        width: '80%',
        marginTop: 15,
        marginBottom: 15,
    },

    password: {
        borderWidth: 1,
        borderColor: theme.colors.gray200,
        height: 45,
        borderRadius: 8,
        paddingLeft: 10,
        width: '80%'
    }
})