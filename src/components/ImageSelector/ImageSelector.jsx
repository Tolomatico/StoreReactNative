import { Image, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from "../../themes/colors"
import { styles } from "./styles"
import { requestCameraPermissionsAsync, launchCameraAsync} from "expo-image-picker"
import { useState } from "react"




const ImageSelector = ({ profileImage, onSelect }) => {

   

    const [image, setImage] = useState(null)

    const verifyPermissions = async () => {
    
      const { status } = await requestCameraPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to grant camera permissions to use this app.', [
          { text: 'Okay' },
        ])
        return false
      }
      return true
    }
  
   
    const onHandleTakePhoto = async () => {

      const isCameraPermission = await verifyPermissions()
      if (!isCameraPermission) return
   
  const result = await launchCameraAsync({
    mediaTypes: 'Images',
    allowsEditing: true,
    aspect: [16, 9],
    quality: 0.5,
   base64: true,   })
    
  
   await onSelect({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
    setImage(result.assets[0].uri);
    console.log({ assets: result.assets });
    }

        return (

            <View style={styles.container}>

                <TouchableOpacity onPress={onHandleTakePhoto} style={styles.touchable}>
                    {image || profileImage ? (
          <Image
            source={{ uri: image || profileImage }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
            <Ionicons name={"camera-outline"} size={30} color={COLORS.primary} />
        )}


                </TouchableOpacity>

            </View>

        )
    }

    export default ImageSelector