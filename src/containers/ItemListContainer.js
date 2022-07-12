import React, {Component} from "react"
import '../css/ItemListContainer.css'
import ItemCount from './ItemCount.js'

class ItemListContainer extends Component{
    constructor(){
        super();
        this.state ={
            products:[
                {name:'Catan', price: 40, stock:4},
                {name:'Secret Hitler', price: 25, stock:2},
                {name:'Flick emm up', price: 20, stock:1},
                {name:'Murder in HongKong', price: 16, stock:3}
            ]
        };
    }
    render (){
        const items = this.state.products.map( prod =>(
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
                <h1>{this.props.saludo} a al sitio de {this.props.website}</h1>
                <div id="breeadcrumbs">Breadcrumb: father/children/childrenOfChildren</div>
                <section>
                    <ul className="productList">{items}</ul>
                </section>
            </div>
        );
    };
}

export default ItemListContainer
