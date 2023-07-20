import { Image, ImageBackground, Text, View } from "react-native"
import { styles } from "./styles"
import products from "../../constants/data/products.json"

const ProductDetail = ({ navigation, route }) => {

    const { productId, color } = route.params

    const product = products.find((product) => product.id === productId)

    return (

        <View style={styles.container}>

            

            <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" >

            </Image>

            <View style={styles.containerDetails}>

            <Text style={styles.text}>{product.name}</Text>
            <Text style={styles.text}>{product.description}</Text>
            <Text style={styles.text}>{`${product.currency.code}$${product.price}`}</Text>

            </View>

        </View>
    )
}


export default ProductDetail



