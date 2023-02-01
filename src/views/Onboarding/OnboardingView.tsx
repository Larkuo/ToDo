import React, { useState } from "react";
import { 
    Text, View 
} from "react-native";
import PrimaryButton from "../../components/primaryButton/primaryButton";
import Screen from "../../components/screen/screen";

interface OnboardingViewProps {}

function OnboardingView ({}: OnboardingViewProps): JSX.Element {
    const [count, setCount] = useState(0);

    function onPress() {
        setCount(count+1);
        console.log({count});
    }
    return(
        <Screen type="fixed">
            <Text>onboarding view</Text>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center', width: '100%'}}>
                <PrimaryButton
                    mode="filled"
                    title="filled btn"
                    stylesOverride={{width: '40%'}}
                    onPress={onPress}
                />
                <PrimaryButton
                    mode="outline"
                    title="outline btn"
                    stylesOverride={{width: '40%'}}
                    onPress={onPress}
                />
            </View>
            <PrimaryButton
                disabled={true}
                loading={true}
                mode="filled"
                title="filled disabled btn"
                onPress={onPress}
            />
            <PrimaryButton
                disabled={true}
                loading={true}
                mode="outline"
                title="outline disabled btn"
                onPress={onPress}
            />
        </Screen>
    );
}

export default OnboardingView;