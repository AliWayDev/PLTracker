import { StyleSheet } from 'react-native'

export const colors = {}

export const globalStyle = StyleSheet.create({
    text: {
        color: "#fff"
    },
    header: {
        backgroundColor: "#045682ff",
        color: '#fff'
    },
    container: {
        paddingTop: 70,
        backgroundColor: "#04334dff",
        height: "100%",
    },
    title: {
        fontSize: 18,
        paddingBottom: 8,
    },
    info: {
        fontSize: 16,
        paddingBottom: 4
    },
    past_info: {
        fontSize: 13
    },
    exercise: {
        width: '100%',

        backgroundColor: "#fff",
        marginTop: 22,
        padding: 12
    },
    exercise_link: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",

        width: "100%",
    },
    tabs: {
        backgroundColor: "#032b41ff",
        marginTop: 0
    },
    tab_item: {
        color: "#fff",
        fontSize: 13,
    }
})