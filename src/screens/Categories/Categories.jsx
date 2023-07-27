import { FlatList, View } from "react-native"
import { styles } from "./styles"
import CategoryItem from "../../components/Category-item/CategoryItem"
import { useSelector } from "react-redux"

const Categories = ({ navigation }) => {

    const CATEGORIES = useSelector((state)=>state.categories.data)

    const categorySelected = (categoryId,color,name) => {

        console.warn(categoryId,color,name);
       navigation.navigate("Products",{categoryId,color,name})

    }

    return (
        <View style={styles.container}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                style={styles.categoriesContainer}
                contentContainerStyle={styles.categoryContainer}
                renderItem={({ item }) =>

                    <CategoryItem {...item} categorySelected={categorySelected} />


                }

            />

        </View>


    )
}

export default Categories
