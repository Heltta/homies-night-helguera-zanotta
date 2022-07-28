import { useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import '../css/CartContainer.css'

function CartContainer(){
    const { cartList, clearCart, isCartEmpty, removeItem } = useCartContext();

    if(isCartEmpty()){return(<h2>Su carrito se encuentra vacío</h2>)};

    return(
            <section className="cartList">
                <ul>
                    {cartList.map(prod => 
                        <li key={prod.id}>
                            <h2 className="itemName">{prod.name}</h2>
                            <img src={prod.photo} alt="gamebox"/>
                            <span className="itemPrice"> Precio: ${prod.quantity}</span>
                            <div className="cartItemUtility">
                                <span className="itemQuantity"> Cantidad: {prod.quantity}</span>
                                <button className="removeItem" onClick={()=> removeItem(prod.id)}>
                                    Eliminar {prod.name} del carrito
                                </button>
                            </div>
                        </li>)}
                </ul>
                <button onClick={clearCart}>Limpiar carrito</button>
            </section>
        );
}

export default CartContainer
