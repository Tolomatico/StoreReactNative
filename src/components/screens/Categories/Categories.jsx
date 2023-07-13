import { FlatList, ImageBackground, Text, TouchableHighlight, View } from "react-native"
import CATEGORIES from "../../../constants/data/categories.json"
import {styles} from "./styles"
import CategoryItem from "./Category-item/CategoryItem"

const Categories = ({categorySelected}) => {

        

  return (
            <View style={styles.container}>
                <FlatList
                    data={CATEGORIES}
                    keyExtractor={(item)=>item.id}
                    style={styles.categoriesContainer}
                    contentContainerStyle={styles.categoryContainer}
                    renderItem={({item})=> 

                        <CategoryItem {...item} categorySelected={categorySelected}  />
                        

                    }
                
                />

            </View>


  )
}

export default Categories
