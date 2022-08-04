import React, {useEffect, useState} from "react"
import '../css/ItemListContainer.css'
import ItemList from './ItemList.js'
import { getCollection } from "../helpers/getProducts";
import {useParams} from "react-router-dom"

function ItemListContainer(props) {
    const [boardGames, setBoardGames] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        getCollection((fbData)=> setBoardGames(fbData), id);
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
