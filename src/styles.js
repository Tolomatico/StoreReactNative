import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "./themes/colors";


export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,

        paddingTop: StatusBar.currentHeight,
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
