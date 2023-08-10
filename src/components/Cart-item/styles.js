import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({

    container: {
        height: 140,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginHorizontal: 15,
        marginVertical: 15,
        borderRadius: 15,
        backgroundColor: COLORS.text2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    itemImage: {
        flex:1,
        height: 100,
        width: 75
    },
    image: {
        flex: 1,
    },



    containerIcons: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: COLORS.primary,
        padding: 5,


    },
    name: {
        fontFamily: "RobotoMono-Bold"
    },
    price:
        { fontFamily: "RobotoMono-Bold" },
    qty:
        { fontFamily: "RobotoMono-Bold" },
    stock: {
        fontFamily: "RobotoMono-Bold"
    },


})