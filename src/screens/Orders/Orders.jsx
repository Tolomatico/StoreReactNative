import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useGetOrdersQuery } from "../../store/orders/api"
import { OrderItem } from "../../components"
import { COLORS } from "../../themes/colors"

const Orders = () => {

    const { data, error, isLoading } = useGetOrdersQuery()
    console.warn(data,error)

    const keyExtractor=(item)=>item.id.toString()

    const renderItem=({item})=><OrderItem  {...item}/>

    if (isLoading)
    return (
      <View >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )

    console.log(data)
    return (

        <View style={styles.container} >
           
            <FlatList
                data={data}
                renderItem={renderItem} 
                keyExtractor={keyExtractor}

            />

        </View>

    )
}

export default Orders