import React, { useContext } from "react";
import { 
    Text, 
    View, 
    StyleSheet,
} from "react-native";
import Screen from "../../components/screen/screen";
import { SizeContext } from "../../context/SizeContext";
import PrimaryButton from "../../components/primaryButton/primaryButton";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import EmailInput from "../../components/emailInput/EmailInput";

interface LoginViewProps {
    onPressLogin: () => void;
    onPressSignup: () => void;
    onChangeEmail: (value: string) => void;
    onChangePassword: (value: string) => void;
}

function LoginView ({
    onPressLogin,
    onPressSignup,
    onChangeEmail,
    onChangePassword,
}: LoginViewProps): JSX.Element {
    const ScreenDimensions = useContext(SizeContext);

    return(
        <Screen type="fixed">
            <View style={styles(ScreenDimensions).main}>
                <View style={styles(ScreenDimensions).titleContainer}>
                    <Text style={styles(ScreenDimensions).title}>Login</Text>
                </View>
                <View style={styles(ScreenDimensions).formContainer}>
                    <EmailInput onChangeText={onChangeEmail} />
                    <PasswordInput onChangeText={onChangePassword} />
                </View>
                <View style={styles(ScreenDimensions).buttonsContainer}>
                    <PrimaryButton 
                        mode="filled" 
                        title="login"
                        stylesOverride={styles(ScreenDimensions).button}
                        titleStylesOverride={styles(ScreenDimensions).buttonLabel}
                        onPress={onPressLogin}
                    />
                    <PrimaryButton 
                        mode="outline" 
                        title="signup"
                        stylesOverride={styles(ScreenDimensions).button}
                        titleStylesOverride={styles(ScreenDimensions).buttonLabel}
                        onPress={onPressSignup}
                    />
                </View>
            </View>
        </Screen>
    );
};

const styles = (ScreenDimensions: {width: number, height: number}) => StyleSheet.create({
    main: {
        width: ScreenDimensions.width,
        height: ScreenDimensions.height,
    },
    titleContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginVertical: ScreenDimensions.height * 0.1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        alignItems: 'center',
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: '7%',
    },
    button: {
        width: '50%',
        paddingVertical: 10,
    },
    buttonLabel: {
        fontSize: 14,
        textTransform: 'uppercase',
    }
});

export default LoginView;