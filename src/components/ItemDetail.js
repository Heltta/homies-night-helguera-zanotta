import React from "react"

function ItemDetail({item}){
    return(
        <section className="itemDetail">
            <div>{item?.name}</div>
            <div>{item?.price} dolares</div>
            <div>{item?.description}</div>
            <img src={item?.photo} alt="tapa del juego"></img>
        </section>
    );
};

export default ItemDetail
