import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { getItem } from "../helpers/getProducts";
import {useParams} from "react-router-dom"
import Loading from "../components/Loading"

function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const [ loading, setLoading ] = useState(true);
    const { itemId } = useParams();

    useEffect(()=>{
        //Load item and change loading state
        //to false when loaded.
        getItem(
            (fbData)=> {
                setItem(fbData);
                setLoading(false);
            },
            itemId);
            //Reset loading state to true when category changes
            return(setLoading(true))
    },
    [itemId])

    return(
        (loading)? 
            <Loading />
            : 
            <section className="itemDetailContainer">
                <ItemDetail item={item}/>
            </section>
    )
}

export default ItemDetailContainer
