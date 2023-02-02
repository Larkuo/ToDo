import React from "react";
import { View } from "react-native";
import PrimaryButton from "../../../components/primaryButton/primaryButton";
import { SwiperButtonsProps } from "../props/Onboarding.props";
import { styles } from "../styles/Onboarding.styles";

function SwiperButtons ({
    swipeCount,
    swiperPosition,
    skip,
    previous,
    next,
    getStarted,
}: SwiperButtonsProps): JSX.Element {

    return(
        <View style={styles.bottomContainer}>
            <PrimaryButton
                mode='outline'
                title={swiperPosition === 1
                            ? 'skip'
                            : 'previous'
                        }
                stylesOverride={styles.bottomButton}
                onPress={swiperPosition === 1
                            ? skip
                            : previous
                        }
            />
            <PrimaryButton
                mode='filled'
                title={swiperPosition === swipeCount
                            ?'get started'
                            : 'next'
                        }
                stylesOverride={styles.bottomButton}
                onPress={swiperPosition === swipeCount
                            ? getStarted
                            : next
                        }
            />
        </View>
    );
}

export default SwiperButtons;