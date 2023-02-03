import Reat from "react";
import LoginView from "./LoginView";


interface LoginContainerProps {}

export function LoginContainer ({}: LoginContainerProps): JSX.Element {
    function login(){
        console.log('login');
    }

    function gotoSignup() {
        console.log('signup screen');
    }
    return(
        <LoginView
            onPressLogin={login}
            onPressSignup={gotoSignup}
        />
    );
}