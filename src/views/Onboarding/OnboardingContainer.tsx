import React, { useState } from "react";
import { OnboardingData } from "./OnboardingData";
import OnboardingView from "./OnboardingView";
import { OnboardingContainerProps } from "./props/Onboarding.props";

export function OnboardingContainer ({
    navigation,
}:OnboardingContainerProps): JSX.Element {
    function skip() {
        console.log('put skip logic here');
    }

    function getStarted() {
        console.log('put get started logic here');
        navigation.navigate('login');
    }

    return(
        <OnboardingView
            skip={skip}
            getStarted={getStarted}
        />
    );
}

