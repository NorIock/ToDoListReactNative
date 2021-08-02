import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { APP_COLORS } from '../../styles/Colors';

const ButtonAddTask = ({ onPressCallBack }) => {
    return(
        <Button
            title = "Nouvelle tâche"
            onPress={() => onPressCallBack()}
        />
    )
};

export default ButtonAddTask;