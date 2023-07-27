import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../store/cart/cart.slice"


const ProductDetail = ({ navigation, route }) => {

    const products = useSelector((state)=>state.products.data)
    const dispath=useDispatch()

    const { productId, color } = route.params

    const product = products.find((product) => product.id === productId)

    const onAddToCart = ()=> {
       
        dispath(addToCart(product))
    }

    return (

        <View style={styles.container}>

            <View style={styles.containerImage}>

                <Image source={{ uri: product.image }} style={[styles.image,{backgroundColor:color}]} resizeMode="cover" >

                </Image>

            </View>

            <View style={styles.containerDetails}>

                <Text style={styles.text}>{product.name}</Text>
                <Text style={styles.text}>{product.description}</Text>
                <Text style={styles.text}>{`${product.currency.code}$${product.price}`}</Text>

            </View>

            <View>

                <TouchableOpacity onPress={()=>onAddToCart(product)}  >
                    <Text>Add to Cart</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}


export default ProductDetail



