import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    cardMainView: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
    },
    cardImage: {
        width: screenWidth * 0.4,
        height: screenWidth * 0.4,
        marginBottom: 20,
    },
    cardTextView: {
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '900',
        color: 'black',
        textTransform: 'lowercase',
    },
    cardDescription: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        textTransform: 'lowercase',
    },
    dotsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '40%',
        marginBottom: 50,
    },
    outlineDot: {
        width: 10,
        height: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 5,
        marginBottom: '275%',
    },
    filledDot: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        borderRadius: 5,
        marginRight: 5,
        marginBottom: '275%',
    },
    bottomButton: {
        width: '65%',
        marginHorizontal: '10%',
        marginBottom: '10%',
    },
    bottomContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
    }
});