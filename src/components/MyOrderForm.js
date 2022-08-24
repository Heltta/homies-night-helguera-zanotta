import { useState } from 'react';
import '../css/OrderForm.css'

import getOrder from "../helpers/getOrder";
import Swal from "sweetalert2";

function MyOrderForm({ setState }){
    const [orderId, setOrderId] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(orderId){
            getOrder(
                (fbData)=> {
                    setState(fbData);
                },
                orderId,
                () => Swal.fire({
                    title: 'Atención',
                    text: 'Orden no encontrada',
                    icon: 'warning',
                    showConfirmButton: true,
                }));
        }
        else{
            (orderId === '' )?
                Swal.fire({
                    title: 'Error',
                    text: 'Ingrese un identificador',
                    icon: 'error',
                    showConfirmButton: true,
                })
                :
                Swal.fire({
                    title: 'Error',
                    text: 'Identificador no válido',
                    icon: 'error',
                    showConfirmButton: true,
                })
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
