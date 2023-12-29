import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import LoginView from "./LoginView";


interface LoginContainerProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export function LoginContainer ({ navigation }: LoginContainerProps): JSX.Element {
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: '',
    });

    function onChangeEmail(value: string) {
        setLoginDetails({...loginDetails, email: value});
    }

    function onChangePassword(value: string) {
        setLoginDetails({...loginDetails, password: value});
    }

    function login(){
        console.log('login ', {loginDetails});
        navigation.navigate('listMain');
    }

    function gotoSignup() {
        console.log('signup screen');
    }
    
    return(
        <LoginView
            onPressLogin={login}
            onPressSignup={gotoSignup}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
        />
    );
}