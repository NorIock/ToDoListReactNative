import { StyleSheet } from "react-native";
import { APP_COLORS } from "../../styles/Colors";

export const Style = StyleSheet.create({
    buttonValidate: { 
        backgroundColor: APP_COLORS.primaryAction, 
        width: 100 
    },
    buttonCancel: { 
        backgroundColor: APP_COLORS.cancel,
        width: 100
    },
    modal: { 
        backgroundColor: APP_COLORS.modalColor,
        height: 150,
        justifyContent: "space-around" 
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: APP_COLORS.primaryText,
        fontSize: 25
    }
});