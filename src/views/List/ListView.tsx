import React from "react";
import { Text, View } from "react-native";
import Screen from "../../components/screen/screen";

interface ListViewProps {};

function ListView({}: ListViewProps): JSX.Element {
    return(
        <Screen type='fixed'>
            <View>
                <Text>This is the list view</Text>
            </View>
        </Screen>
    );
}

export default ListView;