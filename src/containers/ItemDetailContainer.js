import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import {getProducts, getItem} from "../helpers/getProducts";
import {useParams} from "react-router-dom"

function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const [itemTest, setItemTest] = useState({});
    const { itemId } = useParams();

    useEffect(()=>{
        getItem((fbData)=> setItem(fbData));
        // getProducts((parsedData)=>{
        //     const filteredItem = parsedData.find(boardGame => boardGame.id === itemId);
        //     setItem(filteredItem);
        // });
    },
    [itemId])

    return(
        <section className="itemDetailContainer">
            <ItemDetail item={item}/>
        </section>
    )
}

export default ItemDetailContainer
