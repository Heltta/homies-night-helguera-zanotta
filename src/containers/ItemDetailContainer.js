import React from "react";
import ItemDetail from "../components/ItemDetail";

const getItem = () =>{
    try{
        // const dataParse = await fetch('../assets/json/tabletopGames.json')
        setTimeout(
            ()=>fetch('./resources/tabletopGames.json')
                .then((resp)=> resp.json())
                .then((dataParse) => {
                    setBoardGames(dataParse);
            }),
            2000
        )
        // const dataParse = await resp.json();
        // setBoardGames(dataParse);

    }catch(error){
        console.log(error);
    };

};

function ItemDetailContainer(){
    return(
        <>
            <ItemDetail />
        </>
    )
}

export default ItemDetailContainer
