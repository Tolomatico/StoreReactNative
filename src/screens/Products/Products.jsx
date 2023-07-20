import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../themes/colors";
import products from "../../constants/data/products.json";

const Products = ({ navigation , route}) => {

    const {categoryId,color } = route.params

    const productsFilteredByCategory = products.filter((product) => product.categoryId === categoryId)


    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.touchable}  >
                <Ionicons name="arrow-back-circle-outline" size={24} color={COLORS.primary} />
                <Text style={styles.text}>Volver a categorias</Text>

            </TouchableOpacity>


            <View>
                <FlatList
                    data={productsFilteredByCategory}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <View style={[styles.containerProduct,{backgroundColor:color}]}>
                            <Image
                                style={styles.image}
                                source={{uri: item.image}}
                            />
                            <Text style={styles.textName} >{item.name}</Text>
                        </View>
                    }
                />
            </View>
        </View>
    )
}
export default Products;    

