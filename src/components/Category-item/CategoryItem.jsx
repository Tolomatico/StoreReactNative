import { ImageBackground, Text, TouchableHighlight } from "react-native"
import { styles } from "./styles"

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, categorySelected }) => {


    return (


        <TouchableHighlight onPress={() => categorySelected(id,backgroundColor,name)}
            style={[styles.touchable, { backgroundColor }]}>

            <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage} resizeMode="cover" >
                <Text style={styles.name}>{name}</Text>
            </ImageBackground>
        </TouchableHighlight>
    )
}

export default CategoryItem;
