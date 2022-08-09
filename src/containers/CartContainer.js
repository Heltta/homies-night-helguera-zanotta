import { useCartContext } from "../context/CartContext";
import '../css/CartContainer.css'

import Cart from '../components/Cart'
import ClearCartBtn from "../components/ClearCartBtn";
import VoidCart from "../components/VoidCart";
import CartSubtotal from "../components/CartSubtotal";
import OrderForm from "../components/OrderForm";

function CartContainer(){

    const {
        isCartEmpty,
    } = useCartContext();

    if(isCartEmpty()){
        return(
            <section className="cartList">
                <VoidCart />
                <OrderForm />
            </section>
    )};

    return(
            <section className="cartList">
                <Cart />
                <CartSubtotal children={<ClearCartBtn />}/>
                <OrderForm />
            </section>
        );
}

export default CartContainer
