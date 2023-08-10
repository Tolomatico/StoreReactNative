import { StyleSheet } from "react-native"
import { COLORS } from "../../themes/colors"

export const styles = StyleSheet.create({

    container: {

        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 100,
        backgroundColor: COLORS.text2,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,



    }, touchable: {

    },
    image: {
        height:100,
        width:100,
        borderRadius: 50,
    }

})