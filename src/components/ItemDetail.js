import React from "react"
import '../css/itemDetail.css'
import ItemCount from "../containers/ItemCount"

function ItemDetail({item}){
    return(
        <section className="itemDetail">
            <section className="content">
                <div>{item?.name}</div>
                <div>{item?.price} dolares</div>
                <div>{item?.description}</div>
                <ItemCount  stock={item?.stock} 
                            initial={1}
                            onAdd={(amount) => {
                                console.log(`Se agregaron '${item?.name}' X${amount} al carrito`)
                            }}/>
            </section>
            <img src={item?.photo} alt="tapa del juego"></img>
        </section>
    );
};

export default ItemDetail
