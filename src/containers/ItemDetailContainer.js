import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";

const getItem = (setState) =>{
    try{
        setTimeout(
            ()=>fetch('./resources/tabletopGames.json')
                .then((resp)=> resp.json())
                .then((dataParse) => {
                    setState(dataParse);
            }),
            2000
        )

    }catch(error){
        console.log(error);
    };

};

function ItemDetailContainer({itemId=1}){
    const [item, setItem] = useState();

    useEffect(
        ()=>{
        getItem((jsonParseado)=>{
            const filteredItem = jsonParseado.filter(boardGame => boardGame.id == itemId);
            setItem(filteredItem);
        });
    },
    [itemId])

    useEffect(
        ()=>{
            console.log(item);
        },
        [item]
    )

    return(
        <section className="itemDetailContainer">
            {/* <ItemDetail /> */}
        </section>
    )
}

export default ItemDetailContainer
