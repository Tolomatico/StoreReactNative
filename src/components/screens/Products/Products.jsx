import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../../themes/colors";
import products from "../../../constants/data/products.json";

const Products = ({ onHandleGoBack, idCategory }) => {

    const productsFilteredByCategory = products.filter((product) => product.categoryId === idCategory)


    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={onHandleGoBack} style={styles.touchable}  >
                <Ionicons name="arrow-back-circle-outline" size={24} color={COLORS.primary} />
                <Text style={styles.text}>Volver a categorias</Text>

            </TouchableOpacity>


            <View>
                <FlatList
                    data={productsFilteredByCategory}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <View style={styles.containerProduct}>
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

