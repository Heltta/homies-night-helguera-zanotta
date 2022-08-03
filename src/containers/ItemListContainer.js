import React, {useEffect, useState} from "react"
import '../css/ItemListContainer.css'
import ItemList from './ItemList.js'
import {getProducts, getCollection} from "../helpers/getProducts";
import {useParams} from "react-router-dom"

function ItemListContainer(props) {
    const [boardGames, setBoardGames] = useState([]);
    const [bGamesTest, setBGamesTest] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        // console.log("itemListContainer render");
        getCollection((fbData)=> setBGamesTest(fbData));
        getProducts((parsedData) => {
            //Filter items by category (if any)
            if(id!==undefined){
                const filteredGames = parsedData.filter(juego=>juego.category===id);
                setBoardGames(filteredGames);
            }else{
                setBoardGames(parsedData);
            }
        });
    },[id])

    return(
        <div className="itemListContainer">
            <h1>{props.saludo} a al sitio de {props.website}</h1>
            <div id="breeadcrumbs">Breadcrumb: father/children/childrenOfChildren</div>
            <section>
                <ItemList products={boardGames} />
            </section>
        </div>
    );
}

export default ItemListContainer
