import { FlatList, View } from "react-native"
import CATEGORIES from "../../constants/data/categories.json"
import { styles } from "./styles"
import CategoryItem from "../../components/Category-item/CategoryItem"

const Categories = ({ navigation }) => {

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
