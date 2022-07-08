import cart from '../images/cart.svg'

function CartWidget(){
    return(
        <a id="cartwidget" href='#signin'>
            <img src={cart} alt='shopping cart'></img>
        </a>
    )
}

export default CartWidget