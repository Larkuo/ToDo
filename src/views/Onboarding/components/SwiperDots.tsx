import React from "react";
import { View } from "react-native";
import { SwiperDotsProps } from "../props/Onboarding.props";
import { styles } from "../styles/Onboarding.styles";


function SwiperDots({
    swipeCount,
    swiperPosition,
}: SwiperDotsProps): JSX.Element {
    const dotsArray = new Array(swipeCount).fill(null).map((_, i) => i + 1);

    return(
        <View style={styles.dotsContainer}>
            {dotsArray.map(num => (
                <View
                    key={num}
                    style={num <= swiperPosition
                                ? styles.filledDot
                                : styles.outlineDot
                            }
                ></View>
            ))}
        </View>
    );
};

export default SwiperDots;