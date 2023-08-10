import { FlatList, Text, View } from "react-native"
import {styles} from "./styles"
import { menu } from "../../constants/data/menu"
import { Menu } from "../../components"


const Settings = ({navigation}) => {

  const onSelect=(route)=>{
    navigation.navigate(route)
  }


  return (
            <View style={styles.container}>
              <FlatList
                data={menu}
                renderItem={({item})=>(<Menu {...item} onSelect={onSelect}/>)}
                keyExtractor={(item) => item.id.toString()}

              />
               
            </View> 
  )
}

export default Settings