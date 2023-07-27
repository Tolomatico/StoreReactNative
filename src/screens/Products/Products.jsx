import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { useSelector } from "react-redux";

const Products = ({ navigation , route}) => {

    const products= useSelector((state)=>state.products.data)

    const {categoryId,color } = route.params

    const productsFilteredByCategory = products.filter((product) => product.categoryId === categoryId)

    const onSelectProduct = ({productId,color,name})=>{

        console.warn({productId,color,name})

         navigation.navigate("ProductDetail",{productId,color,name})
    }


    return (
        <View style={styles.container} >
            


            <View>
                <FlatList
                    data={productsFilteredByCategory}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={()=>onSelectProduct({productId:item.id,color,name:item.name})} style={[styles.containerProduct,{backgroundColor:color}]}>
                            <Image
                                style={styles.image}
                                source={{uri: item.image}}
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

