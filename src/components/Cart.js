import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem"
import { memo } from "react";

const Cart = memo(() => {

    const {
        cartList,
    } = useCartContext();

    return(
        <ul>
            {cartList.map(prod => <CartItem  
                key={prod.id} 
                item={prod} />)}
        </ul>
    )
})

export default Cart
