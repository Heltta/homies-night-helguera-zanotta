import { useState } from 'react';
import '../css/OrderForm.css'

import getOrder from "../helpers/getOrder";

function MyOrderForm({ setState }){
    const [orderId, setOrderId] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(orderId){
            getOrder(
                (fbData)=> {
                    setState(fbData);
                },
                orderId);
        }
        else{
            (orderId === '' )? 
                console.log('You must write an id')
                :
                console.log(`${orderId} is not a valid id`)
                ;
        }
    }

    return(
        <form
            style={{
                display: 'block',
                zIndex: 0,
                top:0,
                position: 'relative'
            }}
            onSubmit={handleSubmit}>
            <label>
                Identificador de orden
                <input type="text" 
                    value={orderId} 
                    onChange={(event) => setOrderId(event.target.value)} />
            </label>

            <input type="submit" value="Submit" />
        </form>

    )
}

export default MyOrderForm
