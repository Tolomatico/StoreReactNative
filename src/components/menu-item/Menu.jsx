import { Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../themes/colors";
import {styles} from "./styles"



const Menu = ({icon,title,route,onSelect}) => {

  return (

        <View style={styles.container}>

        <TouchableOpacity onPress={()=>onSelect(title)} style={styles.touchable}>
            <Ionicons name={icon} size={25} color={COLORS.primary} />
            <Text  style={styles.title}>{title}</Text>

        </TouchableOpacity>

        </View>

  )
}

export default Menu