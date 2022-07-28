import cart from '../assets/images/cart.svg'
import { Link } from 'react-router-dom'
import { useCartContext } from "../context/CartContext";


function CartWidget({ emptyCart = false }){
    const { cartSize } = useCartContext();
    return(
        <>
            <Link id="cartwidget" to='/cart'>
                {(emptyCart) && <span>{cartSize()}</span>}
                <img src={cart} alt='shopping cart'></img>
            </Link>
        </>
        
    )
}

export default CartWidget