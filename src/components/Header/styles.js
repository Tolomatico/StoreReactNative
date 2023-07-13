import { StyleSheet } from "react-native"
import { COLORS } from "../../themes/colors"

export const styles = StyleSheet.create({

    container: {

        alignItems: "center",
        justifyContent: "center",
        height: 50,
        backgroundColor: COLORS.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,

    },
    text: {
        fontFamily:"RobotoMono-Bold",
        fontSize: 20,
        color: COLORS.text2
    }



})