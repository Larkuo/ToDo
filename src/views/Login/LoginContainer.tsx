import React, { useState } from "react";
import LoginView from "./LoginView";


interface LoginContainerProps {}

export function LoginContainer ({}: LoginContainerProps): JSX.Element {
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