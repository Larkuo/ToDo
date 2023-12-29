import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export interface OnboardingContainerProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
};

export interface OnboardingViewProps {
    skip: () => void;
    getStarted: () => void;
};

export type swiperPositionType = 1 | 2 | 3;

export interface SwiperDotsProps {
    swipeCount: number;
    swiperPosition: number;
};

export interface SwiperButtonsProps {
    swipeCount: number;
    swiperPosition: number;
    skip: () => void;
    previous: () => void;
    next: () => void;
    getStarted: () => void;
};

export interface SwiperCardProps {
    id: number,
    title: string,
    description: string,
    imagePath?: string,
}