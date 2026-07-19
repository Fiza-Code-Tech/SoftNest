import { useSelector } from 'react-redux'
import CartItem from './CartItem'
const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems)

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />
      })}
    </div>
  )
}
export default CartItemsList
