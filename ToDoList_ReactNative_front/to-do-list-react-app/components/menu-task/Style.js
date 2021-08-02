import { StyleSheet } from "react-native";
import { APP_COLORS } from "../../styles/Colors";

export const Style = StyleSheet.create({
    buttonChangeStatus: { backgroundColor: APP_COLORS.primaryAction },
    buttonDelete: { backgroundColor: APP_COLORS.delete},
    modal: { 
        backgroundColor: APP_COLORS.modalColor,
        height: 150,
        justifyContent: "space-around" 
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonCancel: {
        alignItems: 'center',
    },
    textView: {
        justifyContent: "center",
        alignItems: 'center',
    }
})