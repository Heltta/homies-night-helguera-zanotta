import { useCartContext } from "../context/CartContext";
import { useOrderContext } from "../context/OrderContext";
import '../css/CartContainer.css'

import Cart from '../components/Cart'
import ClearCartBtn from "../components/ClearCartBtn";
import VoidCart from "../components/VoidCart";
import CartSubtotal from "../components/CartSubtotal";
import OrderForm from "../components/OrderForm";
import CartMakeOrder from "../components/CartMakeOrder";

function CartContainer(){

    const {
        isCartEmpty,
    } = useCartContext();

    const {
        isOrderEmpty,
    } = useOrderContext();

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
                <CartMakeOrder />
                {!isOrderEmpty() && <OrderForm />}
            </section>
        );
}

export default CartContainer
