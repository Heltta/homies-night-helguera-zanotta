import React, {Component} from "react"

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
            <li>{prod}</li>
        ))
        return(
            <div className="itemListContainer">
                <h1>Hola soy el saludo del contenedor</h1>
                <div>Breadcrumb: father/children/childrenOfChildren</div>
                <section>
                    <ul>{items}</ul>
                </section>
            </div>
        );
    };
}

export default ItemListContainer
