import { useCartContext } from "../context/CartContext";
import '../css/CartContainer.css'

import Cart from '../components/Cart'
import ClearCartBtn from "../components/ClearCartBtn";

function CartContainer(){

    const {
        isCartEmpty,
    } = useCartContext();

    if(isCartEmpty()){return(<h2>Su carrito se encuentra vacío</h2>)};

    return(
            <section className="cartList">
                <Cart />
                <ClearCartBtn />
            </section>
        );
}

export default CartContainer
