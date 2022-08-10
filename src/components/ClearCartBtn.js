import { useCartContext } from "../context/CartContext";
import { useOrderContext } from "../context/OrderContext";

function ClearCartBtn(){
    
    const {
        clearCart,
    } = useCartContext();

    const {
        resetOrder,
    } = useOrderContext();

    const cleanHandler = () =>{
        clearCart();
        resetOrder();
    }
    return(
        <button onClick={cleanHandler}>Limpiar carrito</button>
    )
}

export default ClearCartBtn;
