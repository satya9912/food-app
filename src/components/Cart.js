import { useDispatch, useSelector } from 'react-redux'
import CategoryItem from './CategoryItem';
import { clearCart } from '../utils/reduxSlices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-6">
      <>
      <button className='px-4 py-2 border rounded-lg text-sm font-bold' onClick={handleClearCart}>clear cart</button>
      {cartItems.map((cart) => (
      <CategoryItem category={cart} key={cart.card.info.id} />
      ))}
      </>
    </div>

  )
}

export default Cart;