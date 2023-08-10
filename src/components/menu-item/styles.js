import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: 320,
        flexDirection: "row",
        padding: 10,
        backgroundColor: COLORS.text2,
        marginVertical: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,


    }, touchable: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",


    },
    title: {
        fontFamily: "RobotoMono-Bold",

    }
})