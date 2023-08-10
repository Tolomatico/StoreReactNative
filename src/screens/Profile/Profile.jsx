import { View } from "react-native"
import { styles } from "./styles"
import { ImageSelector } from "../../components"




const Profile = () => {

    const onHandleImage = ({uri,base64}) => { 
        console.warn({uri,base64})
    }


    return (
        <View style={styles.container}>
            <ImageSelector profileImage="" onSelect={onHandleImage} />

        </View>
    )
}

export default Profile