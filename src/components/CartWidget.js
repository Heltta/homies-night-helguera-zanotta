import cart from '../assets/images/cart.svg'
import { Link } from 'react-router-dom'

function CartWidget(){
    return(
        <Link id="cartwidget" to='/cart'>
            <img src={cart} alt='shopping cart'></img>
        </Link>
    )
}

export default CartWidget