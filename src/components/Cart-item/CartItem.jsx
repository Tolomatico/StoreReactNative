import { Ionicons } from "@expo/vector-icons"
import { styles } from "./styles"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../themes/colors"


const CartItem = ({ id
    , categoryId,
    name, price,
    image, currency, quantity,
    stock, onIncreseItemQuantity,
    onDecreseItemQuantity,
    onRemoveItemFromCart }) => {

    return (
        <View style={styles.container}>
            <View style={styles.itemImage}>
                <Image source={{ uri: image }} style={styles.image} />

            </View>

            <View >
                <Text style={styles.name}>{name}</Text>

                <Text style={styles.price}>{`${currency.code}$${price}`}</Text>
                <Text style={styles.qty}>qty: {quantity}</Text>
                <Text style={styles.stock}>Stock: {stock}</Text>

            </View>

            <View style={styles.containerIcons}>
                <TouchableOpacity onPress={() => onIncreseItemQuantity({id})}>
                    <Ionicons name="add" size={25} color={COLORS.text2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDecreseItemQuantity({id})}>
                    <Ionicons name="remove" size={25} color={COLORS.text2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onRemoveItemFromCart({id})}>
                    <Ionicons name="trash" size={20} color={COLORS.text2} />
                </TouchableOpacity>


            </View>
        </View>

    )
}
export default CartItem