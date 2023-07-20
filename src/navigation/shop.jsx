import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products } from "../screens/index"


const Stack = createNativeStackNavigator()

const ShopNavigator = () => {

 

    return (
        <Stack.Navigator  initialRouteName="Categories" screenOptions={() => ({
          
            animation: 'slide_from_left',
          })} >
            <Stack.Screen name="Categories" component={Categories}  />
            <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>

    )

}

export default ShopNavigator