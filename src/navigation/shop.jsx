import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from "../screens/index"
import { COLORS } from "../themes/colors";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SettingsNavigator from "./settings";




const Stack = createNativeStackNavigator()

const ShopNavigator = () => {



  return (


    <Stack.Navigator initialRouteName="Categories"

      screenOptions={({ navigation }) => ({

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
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("SettingsStack")}>
            <Ionicons name="settings-outline" size={25} color={COLORS.text2} />
          </TouchableOpacity>
        )
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

      <Stack.Screen name="SettingsStack" component={SettingsNavigator} 
      
      
      options={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerShown: false,
      
      })} 
      />

    </Stack.Navigator >


  )

}


const styles = StyleSheet.create({
  touchable: {



  },

});


export default ShopNavigator