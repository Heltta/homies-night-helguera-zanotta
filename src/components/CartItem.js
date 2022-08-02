import { useCartContext } from "../context/CartContext";

function CartItem({item}){
    const {id, name, photo, price, quantity} = {...item};
    const {
        removeItem,
    } = useCartContext();

    return(
        <li>
            <h2 className="itemName">{name}</h2>
            <img src={photo} alt={`caja de ${name}`}/>
            <span className="itemPrice"> Costo: ${price*quantity}</span>
            <div className="cartItemUtility">
                <span className="itemQuantity"> Cantidad: {quantity}</span>
                <button className="removeItem" onClick={()=> removeItem(id)}>
                    Eliminar {name} del carrito
                </button>
            </div>
        </li>
    )
}

export default CartItem