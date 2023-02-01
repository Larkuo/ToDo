import React from "react";
import { Text, View } from "react-native";
import Screen from "../../components/screen/screen";
import TaskCard from "../../components/taskCard/taskCard";

interface ListViewProps {};

function ListView({}: ListViewProps): JSX.Element {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

    return(
        <Screen type='scroll'>
            <View style={{paddingVertical: 10, alignItems: 'center'}}>
                {nums.map(num => (
                    <TaskCard key={num} title={`Task ${num}`}/>
                ))}
            </View>
        </Screen>
    );
}

export default ListView;