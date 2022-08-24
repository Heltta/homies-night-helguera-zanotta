
function MyOrderItem({item}){
    const {id, title, price, quantity} = {...item};

    return(
        <li className="item">
            <h3 className="name">{title}</h3>
            <div className="price"> Costo: ${price*quantity}</div>
            <div className="itemQuantity"> Cantidad: {quantity}</div>
        </li>
    )
}

export default MyOrderItem
