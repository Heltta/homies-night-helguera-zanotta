import { useCartContext } from "../context/CartContext";

function ClearCartBtn(){
    
    const {
        clearCart,
    } = useCartContext();

    return(
        <button onClick={clearCart}>Limpiar carrito</button>
    )
}

export default ClearCartBtn;
