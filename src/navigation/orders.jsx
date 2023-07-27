import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens";
import { COLORS } from "../themes/colors";

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {


    return (
        <Stack.Navigator initialRouteName="Orders" screenOptions={() => ({

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
            <Stack.Screen name="Orders" component={Orders}  />
        </Stack.Navigator>
    )
}

export default OrdersNavigator