import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import { useSignInMutation, useSignUpMutation } from "../../store/auth/api"
import { setUser } from "../../store/auth/auth.slice"
import { useDispatch } from "react-redux"


const Auth = () => {

    const dispatch = useDispatch()


    const [isLogin, setIsLogin] = useState(true)
    const headerTitle = isLogin ? "Login" : "Register"
    const messageText = isLogin ? "Need an account?" : "Already have an account?"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [signIn,{data,error}] = useSignInMutation()
    const [signUp] = useSignUpMutation()

  
    const onHandleAuthUser = async () => {
        try {
            if (isLogin) {
            const result =   await signIn({email, password})
            if(result?.data)dispatch(setUser(result.data))
 
            } else {
                await signUp({email, password})
                            }
        } catch (error) {
            console.warn(error)
        }
        
    }



    return (
        <View style={styles.container}>


            <Text style={styles.login}>

                {headerTitle}
            </Text>

            <Text style={styles.login}>

                Email:
            </Text>

            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
                placeholder="example@gmail.com"
            />

            <Text style={styles.login}>

                Password:
            </Text>

            <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
                placeholder="********"

            />

            <View>
                <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                    <Text>{messageText}</Text>
                </TouchableOpacity>

            </View>

            <View>
                <TouchableOpacity onPress={onHandleAuthUser}>
                    <Text>{headerTitle}</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Auth