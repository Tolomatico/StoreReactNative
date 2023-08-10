import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth } from "../screens";


const Stack = createNativeStackNavigator()

const AuthNavigator = () => {


    return (

        <Stack.Navigator initialRouteName="Auth" >
            <Stack.Screen name="Authenticator" component={Auth} />
        </Stack.Navigator>

    )
}

export default AuthNavigator
