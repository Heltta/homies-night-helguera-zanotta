import { useCartContext } from "../context/CartContext";
import '../css/CartContainer.css'

import Cart from '../components/Cart'
import ClearCartBtn from "../components/ClearCartBtn";
import VoidCart from "../components/VoidCart";
import CartSubtotal from "../components/CartSubtotal";

function CartContainer(){

    const {
        isCartEmpty,
    } = useCartContext();

    if(isCartEmpty()){
        return(
            <section className="cartList">
                <VoidCart />
            </section>
    )};

    return(
            <section className="cartList">
                <Cart />
                <CartSubtotal children={<ClearCartBtn />}/>
            </section>
        );
}

export default CartContainer
