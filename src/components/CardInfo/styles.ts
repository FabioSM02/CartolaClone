import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray50,
        borderRadius: 8,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '40%',
        height: 80,
        marginTop: 50
    },

    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    inline: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    symbol: {
        color: theme.colors.gray400,
        fontWeight: '600',
        marginRight: 5,
    },

    main: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.gray600,
    },

    infoGreen: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },

    media: {
        fontFamily: theme.fonts.title700,
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.green400,
    },

    title: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.gray500,
        marginTop: 10
    }

})