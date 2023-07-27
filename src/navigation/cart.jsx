import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens";
import { COLORS } from "../themes/colors";

const Stack = createNativeStackNavigator()

const CartNavigator = () => {


    return (

        <Stack.Navigator initialRouteName="Cart" screenOptions={() => ({

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
            }>
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>

    )
}

export default CartNavigator
