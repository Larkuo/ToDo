import React, { useState } from "react";
import { 
    View,
    Text,
} from "react-native";
import Screen from "../../components/screen/screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { OnboardingViewProps } from "./props/Onboarding.props";
import { styles } from "./styles/Onboarding.styles";
import SwiperDots from "./components/SwiperDots";
import SwiperButtons from "./components/SwiperButtons";
import Logo from "../../components/logo/logo";

function OnboardingView ({
    swipeCount,
    swiperPosition,
    skip,
    previous,
    next,
    getStarted,
}: OnboardingViewProps): JSX.Element {

    return(
        <Screen type="fixed">
            <Logo />
            <View>
                <View></View>
                <View>
                    <Text>title</Text>
                    <Text>description</Text>
                </View>
            </View>
            <SwiperDots swipeCount={swipeCount} swiperPosition={swiperPosition}/>
            <SwiperButtons
                swipeCount={swipeCount}
                swiperPosition={swiperPosition}
                skip={skip}
                previous={previous}
                next={next}
                getStarted={getStarted}
            />
        </Screen>
    );
}

export default OnboardingView;
