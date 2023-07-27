import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./themes/colors";


export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.text2, 
        paddingTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
       
       
    },
    text: {
        color: COLORS.text1
    },
    loader: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
   
});
