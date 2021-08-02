import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { Style } from './Style';

const MenuTask = ({isVisible, onDisapearCallBack, onDeleteCallBack, onChangeStatusCallBack}) => {
    return(
        <TouchableWithoutFeedback onPress={()=>console.log("Disapear")}>
            <Modal
                isVisible={isVisible}
                animationIn={'zoomInDown'}
                animationOut={'zoomOutUp'}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}
            >
                <TouchableWithoutFeedback onPress={()=>console.log("Stay")}>
                    <View style={Style.modal}>
                        <View style={Style.textView}>
                            <Text>Action sur la tâche:</Text>
                        </View>
                        <View style={Style.buttonView}>
                            <Button
                                buttonStyle={Style.buttonDelete}
                                title="Supprimer"
                                onPress={() => onDeleteCallBack()}
                            />
                            <Button
                                buttonStyle={Style.buttonChangeStatus}
                                title="Changer Status"
                                onPress={() => onChangeStatusCallBack()}
                            />
                            <Button
                                title="X"
                                onPress={() => onDisapearCallBack()}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </TouchableWithoutFeedback>
    )
};

export default MenuTask;
