import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./tabs";
import AuthNavigator from "./auth";
import { useSelector } from "react-redux";

const NavigationRoot =()=>{

    const auth=useSelector((state)=>state.auth.user)

    console.warn({auth})
    return(
        <NavigationContainer>
            {auth?.localId ? <TabsNavigator /> : <AuthNavigator />}
         
        </NavigationContainer>

    )
}

export default NavigationRoot;