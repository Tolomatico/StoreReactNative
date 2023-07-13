import { ActivityIndicator, SafeAreaView, Settings, View } from 'react-native';
import { styles } from './styles';
import { Categories, Header, Products } from './components';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { COLORS } from './themes/colors';




export default function App() {


  const [loaded, error] = useFonts({
    "RobotoMono-Regular": require("../assets/fonts/RobotoMono-Regular.ttf"),
    "RobotoMono-Light": require("../assets/fonts/RobotoMono-Light.ttf"),
    "RobotoMono-Bold": require("../assets/fonts/RobotoMono-Bold.ttf"),
    "RobotoMono-Medium": require("../assets/fonts/RobotoMono-Medium.ttf")
  })


 


  const [isCategorySelected, setIsCategorySelected] = useState(false)
  const [idCategory, setIdCategory] = useState(null)

  const title = isCategorySelected ? "Productos" : "Categorias"

  const categorySelected = (id) => {

    console.warn(id)
    setIsCategorySelected(true)
    setIdCategory(id)

  }

  const onHandleGoBack = () => {

    setIsCategorySelected(false)
    setIdCategory(null)
  }

  




  if(!loaded){


return (
    <View style={styles.loader}>

      <ActivityIndicator color={COLORS.primary} size="large" />

    </View>
  )
  }
  







  return (
    
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Header title={title} />
            {isCategorySelected ? (
              <Products onHandleGoBack={onHandleGoBack} idCategory={idCategory} />
            ) : (
              <Categories categorySelected={categorySelected} />
            )}
          </View>
        </SafeAreaView>
      )
   
            }