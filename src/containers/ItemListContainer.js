import React, {Component} from "react"
import '../css/ItemListContainer.css'

class ItemListContainer extends Component{
    constructor(){
        super();
        this.state ={
            products:[
                'Catan',
                'Secret Hitler',
                'Flick emm up',
                'Murder in HongKong'
            ]
        };
    }
    render (){
        const items = this.state.products.map( prod =>(
            <li className="producto">
                <div>
                    <span>{prod}</span>
                    <span>Precio de {prod}</span>
                </div>
                <div>{prod} imagen</div>
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
