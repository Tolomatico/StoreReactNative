import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";

const NavigationRoot =()=>{
    return(
        <NavigationContainer>
            <ShopNavigator/>
        </NavigationContainer>

    )
}

export default NavigationRoot;