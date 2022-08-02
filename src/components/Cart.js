import { useCartContext } from "../context/CartContext";

function Cart (){

    const {
        cartList,
        removeItem,
    } = useCartContext();

    return(
        <ul>
            {cartList.map(prod => 
                <li key={prod.id}>
                    <h2 className="itemName">{prod.name}</h2>
                    <img src={prod.photo} alt="gamebox"/>
                    <span className="itemPrice"> Costo: ${prod.price*prod.quantity}</span>
                    <div className="cartItemUtility">
                        <span className="itemQuantity"> Cantidad: {prod.quantity}</span>
                        <button className="removeItem" onClick={()=> removeItem(prod.id)}>
                            Eliminar {prod.name} del carrito
                        </button>
                    </div>
                </li>)}
        </ul>
    )
}

export default Cart
