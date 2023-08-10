import { StyleSheet } from "react-native"
import { COLORS } from "../../themes/colors";


export const styles = StyleSheet.create({
    orderItemContainer: {
      flex: 1,
      height: 145,
      backgroundColor: COLORS.text2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      padding: 15,
      marginHorizontal: 15,
      marginTop: 15,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 5,
    },
    orderItemDate: {
      fontFamily: "RobotoMono-Bold",
      fontSize: 14,
      color: COLORS.text1,
    },

    orderItemTotal: {
      fontFamily: "RobotoMono-Bold",
      fontSize: 14,
      color: COLORS.text1,
    },
    orderItemId: {
      fontFamily:"RobotoMono-Bold",
      fontSize: 14,
      color: COLORS.text1,
    },
  });
