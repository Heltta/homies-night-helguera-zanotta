
function MyOrderItem({item}){
    const {id, title, price, quantity} = {...item};

    return(
        <li className="item">
            <h3 className="name">Nombre: {title}</h3>
            <div className="itemID"> ID: ${id}</div>
            <div className="price"> Costo: ${price*quantity}</div>
            <div className="quantity"> Cantidad: {quantity}</div>
        </li>
    )
}

export default MyOrderItem
