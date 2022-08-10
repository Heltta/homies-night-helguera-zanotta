import { useCartContext } from "../context/CartContext";

function CartSubtotal({children}){
    const {
        cartCost,
        cartSize,
    } = useCartContext();

    return(
        <div className="subTotal">
            {children}
            <span>{`Subtotal (items ${cartSize()}): $${cartCost()}`}</span>
        </div>
    )
}

export default CartSubtotal
