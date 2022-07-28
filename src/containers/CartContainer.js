import { useEffect } from "react";
import { useCartContext } from "../context/CartContext";

function CartContainer(){
    const { cartList, clearCart, isCartEmpty, removeItem } = useCartContext();

    if(isCartEmpty()){return(<h2>Su carrito se encuentra vacío</h2>)};

    return(
            <>
                <ul>
                    {cartList.map(prod => 
                        <li key={prod.id}>
                            <div>{prod.name}</div>
                            <div> cantidad: {prod.quantity}</div>
                            <img src={prod.photo} alt="gamebox"/>
                            <button onClick={()=> removeItem(prod.id)}>
                                Eliminar {prod.name} del carrito
                            </button>
                        </li>)}
                </ul>
                <button onClick={clearCart}>Limpiar carrito</button>
            </>
        );
}

export default CartContainer
