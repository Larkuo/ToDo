import React, { useContext, useState } from "react";
import {
    View, 
    Text,
    TextInput,
    StyleSheet,
    Pressable,
} from "react-native";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SizeContext } from "../../context/SizeContext";

interface PasswordInputProps{
    onChangeText: (value: string) => void;
    label?: string;
    labelStyleOverride?: Object;
    inputStyleOverride?: Object;
}

function PasswordInput ({
    onChangeText,
    label,
    labelStyleOverride,
    inputStyleOverride,
}: PasswordInputProps) : JSX.Element {
    const ScreenDimensions = useContext(SizeContext);

    const [hidePassword, setHidePassword] = useState(true);

    return(
        <View style={styles(ScreenDimensions).main}>
            <Text 
                style={[styles(ScreenDimensions).inputLabel, labelStyleOverride]}
            >
                {label || 'Password:'}
            </Text>
            <View style={[styles(ScreenDimensions).inputContainer, inputStyleOverride]}>
                <TextInput
                    autoComplete="password"
                    style={styles(ScreenDimensions).input}
                    cursorColor={'black'}
                    onChangeText={onChangeText}
                    secureTextEntry={hidePassword}
                />
                <Pressable 
                    onPress={() => setHidePassword(!hidePassword)}
                    style={styles(ScreenDimensions).iconContainer}
                >
                    <MCIcon name={hidePassword? 'eye':'eye-off'} size={20} color={'black'} />
                </Pressable>
            </View>
        </View>
    );
}

export default PasswordInput;

const styles = (ScreenDimensions: {width: number, height: number}) => StyleSheet.create({
    main: {
        width: '100%',
        marginBottom: ScreenDimensions.height * 0.05,
    },
    inputLabel: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 3, 
        borderColor: 'black', 
        width: '100%', 
        borderRadius: 5,
        paddingHorizontal: 5,
    },
    input: {
        width: '80%', 
        borderRadius: 5,
    },
    inputText: {
        color: 'black',
        fontSize: 14,
    },
    iconContainer: {
        padding: 5,
    },
});
