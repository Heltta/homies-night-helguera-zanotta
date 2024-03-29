import React, {useState} from "react"
import "../css/ItemCount.css"

function ItemCount({ stock, initial, onAdd }){
    const [count, setCount] = useState(initial);

    const sumar = () =>{
        if(count<stock){
            setCount(count+1);
        }
    }
    const restar = () =>{
        if(initial<count){
            setCount(count-1);
        }
    }
    return (
        <div className="itemCount">
            <button onClick={()=> restar()}>-</button>
            <span>{count}</span>
            <button onClick={()=> sumar()}>+</button>
            <section>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </section>
        </div>
    );
};

export default ItemCount
