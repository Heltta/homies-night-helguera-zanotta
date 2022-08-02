import { useCartContext } from "../context/CartContext";
import '../css/CartContainer.css'
import Cart from '../components/Cart'

function CartContainer(){
    
    const {
        clearCart,
        isCartEmpty,
    } = useCartContext();

    if(isCartEmpty()){return(<h2>Su carrito se encuentra vacío</h2>)};

    return(
            <section className="cartList">
                <Cart />
                <button onClick={clearCart}>Limpiar carrito</button>
            </section>
        );
}

export default CartContainer
