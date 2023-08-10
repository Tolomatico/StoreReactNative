import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { useGetProductsByCategoryQuery } from "../../store/products/api";
import { COLORS } from "../../themes/colors";

const Products = ({ navigation, route }) => {

    const { categoryId, color } = route.params

    const { data, error, isLoading } = useGetProductsByCategoryQuery(categoryId)

    const onSelectProduct = ({ productId, color, name }) => {

        

        navigation.navigate("ProductDetail", { productId, color, name })
    }
    const productsFilteredByCategory = data?.filter((product) => product.categoryId === categoryId)

    if (isLoading)
    return (
      <View >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );


    return (
        <View style={styles.container} >



            <View>
                <FlatList
                    data={productsFilteredByCategory}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => onSelectProduct({ productId: item.id, color, name: item.name })} style={[styles.containerProduct, { backgroundColor: color }]}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.image }}
                            />
                            <Text style={styles.textName} >{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    )
}
export default Products;

