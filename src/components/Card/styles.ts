import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        width: '90%',
        height: 60
    },
    
    details: {

    },

    team: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },

    shield: {
        height: 8,
        width: 8,
        borderRadius: 4,
        paddingRight: 7
    },

    nameTeam: {
        fontFamily: theme.fonts.title700
    },

    detailsTeam: {

    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    
    category: {
        color: theme.colors.gray200,
        fontSize: 12
    },

    results: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },

    teamData: {
        fontSize: 14,
        fontWeight: 'bold',
    }

});