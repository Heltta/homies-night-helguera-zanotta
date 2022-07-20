import React from "react"

function ItemDetail({item}){
    return(
        <section className="itemDetail">
            <div>{item?.name}</div>
            <div>{item?.price}</div>
            <div>{item?.description}</div>
            <div>{item?.photo}</div>
        </section>
    );
};

export default ItemDetail
