import React, { useContext } from "react";
import {
    View, 
    Text,
    TextInput,
    StyleSheet,
} from "react-native";
import { SizeContext } from "../../context/SizeContext";

interface EmailInputProps{
    onChangeText: (value: string) => void;
    label?: string;
    labelStyleOverride?: Object;
    inputStyleOverride?: Object;
}

function EmailInput ({
    onChangeText,
    label,
    labelStyleOverride,
    inputStyleOverride,
}: EmailInputProps) : JSX.Element {
    const ScreenDimensions = useContext(SizeContext);

    return(
        <View style={styles(ScreenDimensions).main}>
            <Text 
                style={[styles(ScreenDimensions).inputLabel, labelStyleOverride]}
            >
                {label || 'Email:'}
            </Text>
            <TextInput
                autoComplete="email"
                style={[styles(ScreenDimensions).inputContainer, inputStyleOverride]}
                cursorColor={'black'}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default EmailInput;

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
    inputText: {
        color: 'black',
        fontSize: 14,
    },
});
