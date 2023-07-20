import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles=StyleSheet.create({

    container:{

        flex:1,
        margin:10
    },

    

text:{
    fontSize:14,
    fontFamily:"RobotoMono-Regular",
    color:COLORS.primary
    
}

,
containerProduct:{
padding:20,
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
gap:15,
backgroundColor:COLORS.primary,
marginVertical:10,
marginHorizontal:20,
borderRadius:20





    }
,
image:{
    width: 100,
    height: 100,

},
textName:{
    fontFamily:"RobotoMono-Bold",
    color:COLORS.text2

}


})

   
