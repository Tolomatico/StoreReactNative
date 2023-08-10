import { ActivityIndicator, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../store/cart/cart.slice"
import { useGetProductByIdQuery } from "../../store/products/api"
import { COLORS } from "../../themes/colors"


const ProductDetail = ({ navigation, route }) => {

   
    const dispath=useDispatch()

    const { productId, color } = route.params

    const {data,error,isLoading}=useGetProductByIdQuery(productId)

   

    const product = data?.find((product)=>product.id===productId)

    const onAddToCart = ()=> {
       
        dispath(addToCart(product))
    }

    
    if (isLoading)
    return (
      <View >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );

   

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



