import React, {useEffect, useState} from "react"
import '../css/ItemListContainer.css'
import ItemCount from './ItemCount.js'

function ItemListContainer(props) {
    const [boardGames, setBoardGames] = useState([]);

    async function getBoardGames(){
        try{
            // const dataParse = await fetch('../assets/json/tabletopGames.json')
            await fetch('./resources/tabletopGames.json')
                .then((resp)=> resp.json())
                .then((dataParse) => console.log(dataParse));
            // const dataParse = await resp.json();
            // setBoardGames(dataParse);

        }catch(error){
            console.log(error);
        };
    };
    
    useEffect(()=>{
        getBoardGames();
    },[]);

    const items = boardGames.map( prod =>(
        <li className="producto">
            <div>
                <span>{prod.name}</span>
                <span>{prod.price} dolares</span>
            </div>
            <div>{prod.name} imagen</div>
            <ItemCount  stock={prod.stock} 
                        initial={1}
                        onAdd={(amount) => {
                            console.log(`Se agregaron '${prod.name}' X${amount} al carrito`)
                        }}/>
        </li>
    ))

    return(
        <div className="itemListContainer">
            <h1>{props.saludo} a al sitio de {props.website}</h1>
            <div id="breeadcrumbs">Breadcrumb: father/children/childrenOfChildren</div>
            <section>
                <ul className="productList">{items}</ul>
            </section>
        </div>
    );
}

export default ItemListContainer
