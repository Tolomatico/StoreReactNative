import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        margin:10
    },containerImage:{
        padding:20,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        

    },

    text: {
        fontFamily: "RobotoMono-Bold",
        padding:2,
        textAlign:"center"
    },
    image: {
        borderRadius:20,
        width: 200,
        height: 200
    },
    containerDetails: {
        marginVertical:10

    }


})