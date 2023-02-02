export interface OnboardingContainerProps {};

export interface OnboardingViewProps {
    swipeCount: number;
    swiperPosition: number;
    skip: () => void;
    previous: () => void;
    next: () => void;
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