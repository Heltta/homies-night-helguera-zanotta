import React, { useState } from "react"
import '../css/itemDetail.css'
import ItemCount from "../containers/ItemCount"
import { Link } from "react-router-dom"
import {useCartContext} from "../context/CartContext"

function ItemDetail({item}){
    const [quantity, setQuantity] = useState(0);

    const { addToCart } = useCartContext();

    const storeQuantity = (amount) =>{
        setQuantity(amount);
        addToCart(item, amount);
        console.log(`Se agregaron '${item?.name}' X${amount} al carrito`);
    }

    return(
        <section className="itemDetail">
            <section className="content">
                <div>{item?.name}</div>
                <div>{item?.price} dolares</div>
                <div>{item?.description}</div>
                {(quantity==0)?
                                (<ItemCount  stock={item?.stock} 
                                            initial={1}
                                            onAdd={storeQuantity}/>)
                                            
                                :(<Link to={`/cart`}><button>Terminar compra</button></Link>)
                }
            </section>
            <img src={item?.photo} alt="tapa del juego"></img>
        </section>
    );
};

export default ItemDetail
