import {
    ListContainer,
    OnboardingContainer,
    LoginContainer
} from "../views";

export const APP_SCREENS: {[index: string]: any} = {
    onboard: {
        component: OnboardingContainer,
        options: {
        headerShown: false,
        },
    },
    login: {
        component: LoginContainer,
        options: {
        headerShown: false,
        },
    },
    listMain: {
        component: ListContainer,
        options: {
        headerShown: false,
        },
    }
};

export type AppParamList = typeof APP_SCREENS;