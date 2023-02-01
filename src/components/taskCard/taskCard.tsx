import React, { useState } from "react";
import { 
    View,
    Text
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntIcon from "react-native-vector-icons/AntDesign";
import { styles } from "./taskCard.styles";

interface TaskCardProps {
    id?: string;
    title: string;
    status?: 'completed' | 'uncompleted';
}

type StatusType = 'completed' | 'uncompleted';

function TaskCard({
    id,
    title,
    status = 'uncompleted',
}: TaskCardProps): JSX.Element {

    const [currentStatus, setCurrentStatus] = useState<StatusType>(status);

    function toggleStatus () {
        currentStatus === 'completed'
            ? setCurrentStatus('uncompleted')
            : setCurrentStatus('completed');
    }

    return(
        <View style={styles.mainView}>
            <View style={styles.leftContainer}>
                <View style={styles.leftIconsView}>
                    <Icon
                        name={currentStatus === 'completed'
                                ? 'checkbox-outline'
                                : 'checkbox-blank-outline'
                            }
                        size={35}
                        color='black'
                        onPress={toggleStatus}
                        style={styles.checkboxIcon}
                    />
                </View>
                <View>
                    <Text style={styles.titleText}>{title}</Text>
                    <View style={styles.catergoryView}>
                        <Text style={styles.catergoryText}>Category</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightIconsView}>
                <AntIcon
                    name='edit'
                    size={25}
                    color='black'
                    style={styles.icon}
                />
                <AntIcon
                    name='delete'
                    size={25}
                    color='red'
                />
            </View>
        </View>
    );
}

export default TaskCard;
