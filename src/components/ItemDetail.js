import React, { useState } from "react"
import '../css/itemDetail.css'
import ItemCount from "../containers/ItemCount"

function ItemDetail({item}){
    const [quantity, setQuantity] = useState(0);

    const storeQuantity = (amount) =>{
        setQuantity(amount);
        console.log(`Se agregaron '${item?.name}' X${amount} al carrito`);
    }

    return(
        <section className="itemDetail">
            <section className="content">
                <div>{item?.name}</div>
                <div>{item?.price} dolares</div>
                <div>{item?.description}</div>
                <ItemCount  stock={item?.stock} 
                            initial={1}
                            onAdd={storeQuantity}/>
            </section>
            <img src={item?.photo} alt="tapa del juego"></img>
        </section>
    );
};

export default ItemDetail
