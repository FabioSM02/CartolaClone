import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray50
    },
    
    gridCalendar: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.colors.white,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray100
    },

    price: {
        borderRightWidth: 1,
        borderRightColor: theme.colors.gray100,
        paddingHorizontal: 15,
    },

    title: {
        fontSize: 10,
        color: theme.colors.gray200,
        paddingTop: 5
    },

    teamPrice: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    symbol: {
        color: theme.colors.gray200,
        fontSize: 10,
        paddingRight: 5
    },

    realTeamPrice: {
        fontWeight: 'bold',
    },

    timeCloseMarket: {
        borderRightWidth: 1,
        borderRightColor: theme.colors.gray100,
        paddingHorizontal: 15
    },

    containerDateHour: {
        flexDirection: 'row',
    },

    realHour: {
        fontFamily: theme.fonts.title700,
        fontSize: 12
    },

    icon: {
        paddingTop: 5,
        marginLeft: 7
    },

    Money: {
        paddingHorizontal: 15
    },

    remainingCashContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    remainingCash: {
        fontWeight: 'bold'
    }
})