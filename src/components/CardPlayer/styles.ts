import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    position: {
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 15
    },

    container: {
        borderRadius: 8
    },

    imageDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 25,
    },

    identificator: {
        width: 140,
        height: 20,
        marginTop: 70
    },

    containerFlags: {
        flexDirection: 'row',
    },

    flags: {
        height: 30,
        width: 30,
        borderRadius: 15
    },

    namePlayer: {
        fontFamily: theme.fonts.title700,
        fontSize: 16
    },

    positionPlayer: {
        fontFamily: theme.fonts.title500,
        fontSize: 12
    },

    imagePlayer: {
        height: 220,
        marginLeft: -15
    },

    player: {
        height: 220,
    },

    cards: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -70
    },

    statistics: {
        flexDirection: 'row',
        marginVertical: 10
    },

    climbed: {
        color: theme.colors.gray200,
        paddingLeft: 5
    }

});