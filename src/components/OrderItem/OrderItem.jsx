import { Text, TouchableOpacity } from "react-native"
import {styles} from "./styles"


const OrderItem=({id,total,dateOfCreation})=>{

    const formatDate = (time) => {
        const date = new Date(time)
        return date.toLocaleDateString()
      }
    return(

    <TouchableOpacity  style={styles.orderItemContainer} onPress={() => { }} >

    <Text style={styles.orderItemId} >Id : {id}</Text>
    <Text style={styles.orderItemTotal} >Total: USD${total}</Text>
    <Text style={styles.orderItemDate} >Created at: {formatDate(dateOfCreation)}</Text>
</TouchableOpacity>

    )
}   

export default OrderItem