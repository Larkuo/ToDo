import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Screen from "../screen/screen";

interface IntroScreenProps {
    loader?: boolean;
}

export function IntroScreen ({
    loader
}: IntroScreenProps): JSX.Element {
    
    return(
        <Screen type='fixed'>
            <View style={styles.mainView}>
                <Icon
                    name='clipboard-text'
                    color='black'
                    size={70}
                    style={styles.icon}
                />
                <Text style={styles.text}>todo app</Text>

                {loader?
                    <ActivityIndicator style={styles.indicator} size="large" color="black" /> : null
                }
            </View>
        </Screen>
    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    icon: {
        marginBottom: 5,
    },
    text: {
        fontSize: 30,
        fontWeight: '800',
        color: 'black',
    },
    indicator: {
        marginTop: 10,
    }
})