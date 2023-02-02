import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./logo.styles";

interface LogoProps {
    stylesOverride?: Object;
    textStylesOverride?: Object;
    iconSizeOverride?: number;
    iconColorOverride?: string;
}

function Logo ({

}: LogoProps): JSX.Element {
    return(
        <View style={styles.logoContainer}>
            <Icon
                name='clipboard-text'
                color='black'
                size={40}
                style={styles.logoIcon}
            />
            <Text style={styles.logoText}>todo app</Text>
        </View>
    );
}

export default Logo;