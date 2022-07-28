import { useCartContext } from "../context/CartContext";

function CartContainer(){
    const { cartList } = useCartContext();
    return(
        <ul>
            {cartList.map(prod => 
                <li key={prod.id}>
                    <div>{prod.name}</div>
                    <div> cantidad: {prod.quantity}</div>
                    <img src={prod.photo} alt="gamebox"/>
                </li>)}
        </ul>
    )
}

export default CartContainer
