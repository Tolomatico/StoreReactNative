import { ActivityIndicator, SafeAreaView,  View } from 'react-native';
import { styles } from './styles';

import { useFonts } from 'expo-font';
import { COLORS } from './themes/colors';

import NavigationRoot from './navigation';





export default function App() {


  const [loaded, error] = useFonts({
    "RobotoMono-Regular": require("../assets/fonts/RobotoMono-Regular.ttf"),
    "RobotoMono-Light": require("../assets/fonts/RobotoMono-Light.ttf"),
    "RobotoMono-Bold": require("../assets/fonts/RobotoMono-Bold.ttf"),
    "RobotoMono-Medium": require("../assets/fonts/RobotoMono-Medium.ttf")
  })


 


  if(!loaded){


return (
    <View style={styles.loader}>

      <ActivityIndicator color={COLORS.primary} size="large" />

    </View>
  )
  }


  return (
    <SafeAreaView style={styles.safeArea}>
       
          <NavigationRoot/>
          </SafeAreaView>
        

      )
   
            }


        