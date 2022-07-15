import React, {useEffect, useState} from "react"
import '../css/ItemListContainer.css'
import ItemList from './ItemList.js'

function ItemListContainer(props) {
    const [boardGames, setBoardGames] = useState([]);

    async function getBoardGames(){
        try{
            // const dataParse = await fetch('../assets/json/tabletopGames.json')
            await fetch('./resources/tabletopGames.json')
                .then((resp)=> resp.json())
                .then((dataParse) => {
                    setBoardGames(dataParse);
                    console.log(dataParse)
                });
            // const dataParse = await resp.json();
            // setBoardGames(dataParse);

        }catch(error){
            console.log(error);
        };
    };
    
    useEffect(()=>{
        getBoardGames();
    },[]);

    return(
        <div className="itemListContainer">
            <h1>{props.saludo} a al sitio de {props.website}</h1>
            <div id="breeadcrumbs">Breadcrumb: father/children/childrenOfChildren</div>
            <section>
                <ul className="productList">
                    <ItemList products={boardGames} />   
                </ul>
            </section>
        </div>
    );
}

export default ItemListContainer
