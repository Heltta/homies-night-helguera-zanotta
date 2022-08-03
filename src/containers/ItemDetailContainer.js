import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import getProducts from "../helpers/getProducts";
import {useParams} from "react-router-dom"

function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(()=>{
        getProducts((parsedData)=>{
            const filteredItem = parsedData.find(boardGame => boardGame.id === itemId);
            setItem(filteredItem);
        });
    },
    [itemId])

    return(
        <section className="itemDetailContainer">
            <ItemDetail item={item}/>
        </section>
    )
}

export default ItemDetailContainer
