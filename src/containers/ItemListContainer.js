import React, {useEffect, useState} from "react"
import '../css/ItemListContainer.css'
import ItemList from '../components/ItemList'
import { getCollection } from "../helpers/getProducts";
import {useParams} from "react-router-dom"
import Loading from "../components/Loading"

function ItemListContainer() {
    const [boardGames, setBoardGames] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        //Load items and change loading state
        //to false when loaded.
        getCollection(
            (fbData)=> {
                setBoardGames(fbData);
                setLoading(false);
            },
            id);
        //Reset loading state to true when category changes
        return(setLoading(true))
    },[id])

    
    return(
        (loading)? 
            <Loading />
            : 
            <div className="itemListContainer">
                <section>
                    <ItemList products={boardGames} />
                </section>
            </div>
    );
}

export default ItemListContainer
