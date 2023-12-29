import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 3,
        height: 70,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    leftIconsView: {
        paddingRight: 10,
        height: '100%',
        justifyContent: 'center',
    },
    checkboxIcon: {},
    titleText: {
        textTransform: 'capitalize',
        color: 'black',
        fontSize: 14,
    },
    strikeText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: 'black',
    },
    catergoryView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 1,
        backgroundColor: 'black',
        borderRadius: 5,
        marginTop: 5,
    },
    catergoryText: {
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 10,
    },
    rightIconsView: {
        flexDirection: 'row',
    },
    icon: {
        marginRight: 10,
    },
});