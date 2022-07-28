import React, {useEffect, useState} from "react"
import '../css/ItemListContainer.css'
import ItemList from './ItemList.js'
import {useParams} from "react-router-dom"
import { collection ,doc, getDoc, getFirestore} from 'firebase/firestore'

function ItemListContainer(props) {
    const [boardGames, setBoardGames] = useState([]);
    const [boardGame, setBoardGame] = useState([]);
    const { id } = useParams();

    async function getBoardGames(){
        try{
            // const dataParse = await fetch('../assets/json/tabletopGames.json')
            setTimeout(
                ()=>fetch('/resources/tabletopGames.json')
                .then((resp)=> resp.json())
                .then((dataParse) => {
                    if(id!=undefined){
                        const filteredGames = dataParse.filter(juego=>juego.category==id);
                        setBoardGames(filteredGames);
                    }else{
                        setBoardGames(dataParse);
                    }
                }),
                2000
            )
            // const dataParse = await resp.json();
            // setBoardGames(dataParse);

        }catch(error){
            console.log(error);
        };
    };
    
    useEffect(()=>{
        //getBoardGames();
        const db = getFirestore();
        const queryProduct = doc(db, 'items', '6jcpup3VRhNlVKPMQ8if');
        getDoc(queryProduct)
            .then(resp => setBoardGame( { id: resp.id, ...resp.data() } ))
            .catch(error => console.log(error))
    },[]);

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
