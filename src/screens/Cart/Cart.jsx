import { FlatList, Text, TouchableOpacity, View} from "react-native"
import { styles } from "./styles"
import { generarId } from "../../utils/functions"
import { CartItem } from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, decreseItemQuantity, incrementItemQuantity, removeItemFromCart } from "../../store/cart/cart.slice"
import { useCreateOrderMutation } from "../../store/orders/api"

const Cart =({navigation}) =>{

    const dispath=useDispatch()

    const cart=useSelector((state)=>state.cart.items)
    const total=useSelector((state)=>state.cart.total)

    const [createOrder,{data,isError,error,isLoading}]=useCreateOrderMutation()

    const onIncreseItemQuantity=(id)=>{
        dispath(incrementItemQuantity(id))

    }

    const onDecreseItemQuantity=(id)=>{
        dispath(decreseItemQuantity(id))

    }

    const onRemoveItemFromCart=(id)=>{

        dispath(removeItemFromCart(id))

    }

    const onCreateOrder = async () => {
        const newOrder = {
          id: generarId(),
          items: cart,
          total,
          user: {
            id: 1,
            name: 'John Doe',
            address: '123 Street',
            phone: '123456789',
            email: 'johndoe@gmail.com',
          },
          payment: {
            method: 'VISA',
          },
          delivery: {
            method: 'UPS',
            trackingNumber: generarId(),
          },
          dateOfCreation: Date.now(),
          finishedAt: '',
        }
        try {
          await createOrder(newOrder)
          dispath(clearCart())
          navigation.navigate('OrdersTab')
        } catch (e) {
          console.warn({ error, e })
        }
      };
    

    if(cart.length===0){
        return(
            <View style={styles.viewEmptyCart}> 
                <Text style={styles.textEmptyCart}>No hay productos en el carrito</Text>
            </View>
        )
    }

  

    return(
        <View style={styles.container} >
                
                <FlatList
                    data={cart}
                    renderItem={({item})=><CartItem {...item} onIncreseItemQuantity={onIncreseItemQuantity} onRemoveItemFromCart={onRemoveItemFromCart} onDecreseItemQuantity={onDecreseItemQuantity}/>}
                    keyExtractor={(item)=>item.id.toString()}
                    style={styles.listContainer}
                
                />

                <TouchableOpacity  onPress={()=>onCreateOrder()} style={styles.buyButton}>
                        <Text style={styles.textBuyButton}>
                            Precio Total: USD {total}
                        </Text>
                </TouchableOpacity>

        </View>

    )
}

export default Cart