import React, { useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Style } from './Style';

const TextPrompt = ({ isVisible, onCancelCallBack, onSubmitCallBack }) => {

    const [content, setContent] = useState();

    return(

        <Modal
            isVisible={isVisible}
            animationIn={'zoomInDown'}
            animationOut={'zoomOutUp'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
        >
            <View style={Style.modal}>
                <Input
                    placeholder="Ajouter une nouvelle tâche"
                    defaultValue=""
                    onChangeText={(text) => setContent(text)}
                />
                <View style={Style.buttonView}>
                    <Button
                        buttonStyle={Style.buttonCancel}
                        title="Annuler"
                        onPress={() => onCancelCallBack()}
                    />
                    <Button
                        buttonStyle={Style.buttonValidate}
                        title="OK"
                        onPress={() => onSubmitCallBack(content)}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default TextPrompt;