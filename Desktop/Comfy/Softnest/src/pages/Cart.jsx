import { useSelector } from 'react-redux'
import { CartItemsList, SectionTitle, CartTotals } from '../components'
import { Link } from 'react-router-dom'

const Cart = () => {
  const user = null
  const numsItemsInCart = useSelector(
    (state) => state.cartReducer.numItemsInCart,
  )

  if (numsItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div>
        <div>
          <CartItemsList />
        </div>
        <div>
          {user ? (
            <Link to="/checkout">Proceed to checkout</Link>
          ) : (
            <Link to="/login">please login</Link>
          )}
        </div>
        <div>
          <CartTotals />
        </div>
      </div>
    </>
  )
}

export default Cart
