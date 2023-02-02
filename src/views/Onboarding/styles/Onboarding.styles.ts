import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    dotsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '40%',
        marginVertical: '10%',
    },
    outlineDot: {
        width: 10,
        height: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
    },
    filledDot: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        borderRadius: 5,
    },
    bottomButton: {
        width: '35%',
    },
    bottomContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
    }
});