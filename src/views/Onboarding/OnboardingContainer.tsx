import React, { useState } from "react";
import { OnboardingData } from "./OnboardingData";
import OnboardingView from "./OnboardingView";
import { OnboardingContainerProps } from "./props/Onboarding.props";

export function OnboardingContainer ({

}:OnboardingContainerProps): JSX.Element {
    const swipeCount = OnboardingData.length;

    const [swiperPosition, setSwiperPosition] = useState(1);

    function skip() {
        console.log('put skip logic here');
    }

    function previous() {
        if(swiperPosition > 1){
            setSwiperPosition(swiperPosition-1);
        }else{
            setSwiperPosition(1);
        }
    }

    function next() {
        if(swiperPosition < swipeCount) {
            setSwiperPosition(swiperPosition+1);
        }else{
            setSwiperPosition(swipeCount);
        }
    }

    function getStarted() {
        console.log('put get started logic here');
    }

    return(
        <OnboardingView
            swipeCount={swipeCount}
            swiperPosition={swiperPosition}
            skip={skip}
            previous={previous}
            next={next}
            getStarted={getStarted}
        />
    );
}

