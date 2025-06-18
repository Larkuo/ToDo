import React from "react";
import { 
    View,
    Modal
} from "react-native";
import { styles } from "./EditTaskModal.styles";

interface EditTaskModalProps {
    showModal: boolean;
    toggleModal: () => void;
}

function EditTaskModal({
    showModal,
    toggleModal,
}: EditTaskModalProps): JSX.Element {
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={toggleModal}
        >
            <View style={styles.mainModal}></View>
        </Modal>
    );
}

export default EditTaskModal;
