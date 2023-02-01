import React from "react";
import { 
    Text 
} from "react-native";
import Screen from "../../components/screen/screen";

interface OnboardingViewProps {}

function OnboardingView ({}: OnboardingViewProps): JSX.Element {
    return(
        <Screen type="fixed">
            <Text>Onboarding view</Text>
        </Screen>
    );
}

export default OnboardingView;