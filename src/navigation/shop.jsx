import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products ,ProductDetail } from "../screens/index"
import { COLORS } from "../themes/colors";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';




const Stack = createNativeStackNavigator()

const ShopNavigator = () => {



  return (


    <Stack.Navigator initialRouteName="Categories" screenOptions={() => ({

      headerTitleAlign: "center",

      headerTitleStyle:
      {
        fontFamily: "RobotoMono-Bold",
        color: COLORS.text2,


      },



      headerStyle: {
        backgroundColor: COLORS.primary,


      },



      animation: 'slide_from_left',
    })
    } >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products}

        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={25} color={COLORS.text2} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })} />

<Stack.Screen name="ProductDetail" component={ProductDetail}

options={({ navigation, route }) => ({
  headerStyle: {
    backgroundColor: route.params.color,
  },
  headerLeft: () => (
    <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back-circle" size={25} color={COLORS.text2} />
    </TouchableOpacity>
  ),
  title: route.params.name,
})} />



    </Stack.Navigator >


  )

}


const styles = StyleSheet.create({
  touchable: {



  },

});


export default ShopNavigator