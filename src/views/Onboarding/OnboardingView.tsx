import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { OnboardingData } from "./OnboardingData";
import { styles } from "./styles/Onboarding.styles";
import { 
    doneButton,
    dotComponent,
    nextButton,
    skipButton 
} from "./components/OnboardingComponents";
import { OnboardingViewProps } from "./props/Onboarding.props";

function OnboardingView ({
    skip,
    getStarted,
}: OnboardingViewProps): JSX.Element {
    return(
        <Onboarding
            DotComponent={dotComponent}
            SkipButtonComponent={skipButton}
            onSkip={skip}
            DoneButtonComponent={doneButton}
            onDone={getStarted}
            NextButtonComponent={nextButton}
            titleStyles={styles.cardTitle}
            subTitleStyles={styles.cardDescription}
            bottomBarColor={'white'}
            pages = {OnboardingData.map(item => (
                {
                    backgroundColor: 'white',
                    title: item.title,
                    subtitle: item.description,
                    image: <Image
                                source={item.image
                                            ? item.image
                                            : require('../../assets/todo_logo.png')
                                        }
                                style={styles.cardImage}
                            />
                }
            ))}
        />
    );
}

export default OnboardingView;
