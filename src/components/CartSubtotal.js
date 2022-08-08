import { useCartContext } from "../context/CartContext";
import CartMakeOrder from "./CartMakeOrder";

function CartSubtotal({children}){
    const {
        cartCost,
        cartSize,
    } = useCartContext();

    return(
        <div className="subTotal">
            {children}
            <span>{`Subtotal (items ${cartSize()}): $${cartCost()}`}</span>
            <CartMakeOrder />
        </div>
    )
}

export default CartSubtotal
