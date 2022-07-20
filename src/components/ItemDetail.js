import React from "react"
import '../css/ItemDetail.css'

function ItemDetail({item}){
    return(
        <section className="itemDetail">
            <section className="content">
                <div>{item?.name}</div>
                <div>{item?.price} dolares</div>
                <div>{item?.description}</div>
            </section>
            <img src={item?.photo} alt="tapa del juego"></img>
        </section>
    );
};

export default ItemDetail
