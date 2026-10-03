import { StyleSheet } from 'react-native'

export const CycleInfoStyles = StyleSheet.create({
    cylce_info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "baseline",
        padding: 12
    },
    cycle_info_sub: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    cycle_info_title: {
        fontSize: 22,
        color: "#fff",
        paddingBottom: 8,
    },
    cycle_info_p: {
        fontSize: 16,
        color: "#fff"
    },
    cycle_info_p_sub: {
        fontSize: 16,
        color: "#fff",
        paddingBottom: 8
    }
})