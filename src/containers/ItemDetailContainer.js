import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import {useParams} from "react-router-dom"

const getItem = (setState) =>{
    try{
        setTimeout(
            ()=>fetch('/resources/tabletopGames.json')
                .then((resp)=> resp.json())
                .then((dataParse) => {
                    setState(dataParse);
            }),
            250
        )

    }catch(error){
        console.log(error);
    };

};

function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    useEffect(()=>{
        getItem((jsonParseado)=>{
            const filteredItem = jsonParseado.find(boardGame => boardGame.id == itemId);
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
