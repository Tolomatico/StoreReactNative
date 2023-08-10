import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Address, Profile, Settings } from "../screens";
import { COLORS } from "../themes/colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'


const Stack = createNativeStackNavigator()

const SettingsNavigator = () => {


    return (

        <Stack.Navigator initialRouteName="Settings" 
        
         screenOptions={({navigation}) => ({

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
            headerLeft: () => (
              <TouchableOpacity  onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={25} color={COLORS.text2} />
              </TouchableOpacity>
            ),
            
            })
            }>
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Address" component={Address} />


        </Stack.Navigator>

    )
}

export default SettingsNavigator