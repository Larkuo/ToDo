import React from "react";
import { Text } from "react-native";
import Screen from "../../components/screen/screen";

interface LoginViewProps {
    onPressLogin: () => void;
    onPressSignup: () => void;
}

function LoginView ({

}: LoginViewProps): JSX.Element {
    return(
        <Screen type="fixed">
            <Text style={{fontSize: 20, color: 'black'}}>Login View</Text>
        </Screen>
    );
};

export default LoginView;