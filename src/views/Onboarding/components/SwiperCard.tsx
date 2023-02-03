import React from "react";
import { Text, View } from "react-native";
import { SwiperCardProps } from "../props/Onboarding.props";
import { styles } from "../styles/Onboarding.styles";

function SwiperCard ({
    id,
    title,
    description,
    imagePath
}: SwiperCardProps): JSX.Element {
    return(
        <View style={styles.cardMainView}>
            <View style={styles.cardImage}>
            </View>
            <View style={styles.cardTextView}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
            </View>
        </View>
    );
}

export default SwiperCard;