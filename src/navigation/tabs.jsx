import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { COLORS } from "../themes/colors";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator()

const TabsNavigator = () => {

    const cartItems=useSelector((state)=>state.cart.items)


    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: "RobotoMono-Bold",
                    fontSize:14
                },
                tabBarStyle: {

                    backgroundColor: COLORS.primary
                },
                tabBarActiveTintColor: COLORS.text2,
                tabBarInactiveTintColor: COLORS.text1,
                
            }
            }>
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{ 
                    tabBarLabel:"Shop",
                    tabBarIcon:({focused,color,size})=>
                     <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                }}
                 />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator} 
                options={{ 
                    tabBarLabel:"Cart",
                    tabBarIcon:({focused,color,size})=>
                     <Ionicons name={focused ? "cart" : "cart-outline"} size={size} color={color} />,
                     tabBarBadge:cartItems.length,
                     tabBarBadgeStyle:{
                        fontFamily:"RobotoMono-Bold"

                     }
                }}
                />
            <BottomTab.Screen
                name="OrdersTab"
                component={OrdersNavigator} 
                options={{ 
                    tabBarLabel:"Orders",
                    tabBarIcon:({focused,color,size})=>
                     <Ionicons name={focused ? "document" : "document-outline"} size={size} color={color} />
                }}
                />
        </BottomTab.Navigator>
    )
}

export default TabsNavigator