import React from "react";
import { 
    KeyboardAvoidingView,
    SafeAreaView,
    useColorScheme,
    StatusBar,
    ScrollView
} from "react-native";
import { ScreenProps } from "./screen.props";
import { styles } from "./screen.styles";

function NoScrollScreen (props:ScreenProps) {
    const isDarkMode = useColorScheme() === 'dark';
    const statusBar = props.statusBarHidden || false;

    return(
        <KeyboardAvoidingView
            style={isDarkMode?styles.backgroundStyleDark:styles.backgroundStyleLight}
        >
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                hidden={statusBar}
            />
            <SafeAreaView>
                {props.children}
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

function ScrollScreen (props:ScreenProps) {
    const isDarkMode = useColorScheme() === 'dark';
    const statusBar = props.statusBarHidden || false;

    return(
        <KeyboardAvoidingView
            style={isDarkMode?styles.backgroundStyleDark:styles.backgroundStyleLight}
        >
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                hidden={statusBar}
            />
            <SafeAreaView>
                <ScrollView>
                    {props.children}
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

function Screen (props: ScreenProps) {
    return(
        <>
            {props.type === 'fixed'
                ? <NoScrollScreen
                    type={props.type}
                    children={props.children}/>
                : <ScrollScreen
                    type={props.type}
                    children={props.children}/>
            }
        </>
    );
}

export default Screen;