import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./tabs";

const NavigationRoot =()=>{
    return(
        <NavigationContainer>
           <TabsNavigator></TabsNavigator>
        </NavigationContainer>

    )
}

export default NavigationRoot;