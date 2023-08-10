import { ActivityIndicator, FlatList, View } from "react-native"
import { styles } from "./styles"
import CategoryItem from "../../components/Category-item/CategoryItem"
import { useSelector } from "react-redux"
import { useGetCategoriesQuery } from "../../store/categories/API/categoriesApi"
import { COLORS } from "../../themes/colors"

const Categories = ({ navigation }) => {

    const {data,error,isLoading}=useGetCategoriesQuery()



    const categorySelected = (categoryId,color,name) => {

       
       navigation.navigate("Products",{categoryId,color,name})

    }

    

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
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
