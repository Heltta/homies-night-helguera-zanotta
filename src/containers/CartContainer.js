import { useCartContext } from "../context/CartContext";
import { useOrderContext } from "../context/OrderContext";
import '../css/CartContainer.css'

import Cart from '../components/Cart'
import ClearCartBtn from "../components/ClearCartBtn";
import VoidCart from "../components/VoidCart";
import CartSubtotal from "../components/CartSubtotal";
import OrderForm from "../components/OrderForm";
import CartMakeOrder from "../components/CartMakeOrder";
import FinishOrderBtn from "../components/FinishOrderBtn";

function CartContainer(){

    const {
        isCartEmpty,
    } = useCartContext();

    const {
        isBuyerItemsEmpty,
        isBuyerEmpty,
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
                {!isBuyerItemsEmpty() && <OrderForm />}
                {!isBuyerEmpty() && <FinishOrderBtn />}
            </section>
        );
}

export default CartContainer
