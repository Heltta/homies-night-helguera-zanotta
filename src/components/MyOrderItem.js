
function MyOrderItem({item}){
    const {id, title, price, quantity} = {...item};

    return(
        <li>
            <h2 className="itemName">{title}</h2>
            <img src={"/images/caja_spyfall.webp"} alt={`caja de ${title}`}/>
            <span className="itemPrice"> Costo: ${price*quantity}</span>
            <div className="cartItemUtility">
                <span className="itemQuantity"> Cantidad: {quantity}</span>
            </div>
        </li>
    )
}

export default MyOrderItem
