import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({

   container: {
      flex: 1
   },
   listContainer: {
      flex: 1,
      backgroundColor: COLORS.text2
   },
   viewEmptyCart: {
      flex: 1,
      marginTop: 30

   },
   textEmptyCart: {
      textAlign: "center",
      fontFamily: "RobotoMono-Bold"
   },
   buyButton: {
      flex: 0.1,
      borderColor:COLORS.primary
   },
   textBuyButton: {
      padding:10,
      fontFamily: "RobotoMono-Bold"
   }



})