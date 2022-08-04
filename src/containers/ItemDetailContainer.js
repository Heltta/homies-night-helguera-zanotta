import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { getItem } from "../helpers/getProducts";
import {useParams} from "react-router-dom"

function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(()=>{
        getItem((fbData)=> setItem(fbData), itemId);
    },
    [itemId])

    return(
        <section className="itemDetailContainer">
            <ItemDetail item={item}/>
        </section>
    )
}

export default ItemDetailContainer
