import React from "react";
import { View } from "react-native";
import PrimaryButton from "../../../components/primaryButton/primaryButton";
import { styles } from "../styles/Onboarding.styles";

export function dotComponent ({selected}: {selected: boolean}) {
    return(
        <View
            style={selected? styles.filledDot : styles.outlineDot}
        />
    );
}

export function skipButton ({onPress}: {onPress?: () => void}) {
    return(
        <PrimaryButton
            mode='outline'
            title='skip'
            stylesOverride={styles.bottomButton}
            titleStylesOverride={styles.bottomButtonText}
            onPress={onPress}
        />
    );
}

export function nextButton ({onPress}: {onPress?: () => void}) {
    return(
        <PrimaryButton
            mode='filled'
            title='next'
            stylesOverride={styles.bottomButton}
            titleStylesOverride={styles.bottomButtonText}
            onPress={onPress}
        />
    );
}

export function doneButton ({onPress}: {onPress?: () => void}) {
    return(
        <PrimaryButton
            mode='filled'
            title='get started'
            stylesOverride={styles.bottomButton}
            titleStylesOverride={styles.bottomButtonText}
            onPress={onPress}
        />
    );
}