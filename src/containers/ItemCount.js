import React, {useState} from "react"

function ItemCount(props){
    const [count, setCount] = useState(props.initial);
    const sumar = () =>{
        if(count<props.stock){
            setCount(count+1);
        }
    }
    const restar = () =>{
        if(props.initial<count){
            setCount(count-1);
        }
    }
    return (
        <div>
            <button onClick={()=> restar()}>-</button>
            <span>{count}</span>
            <button onClick={()=> sumar()}>+</button>
            <section>
                <button onClick={() => props.onAdd(count)}>Agregar al carrito</button>
            </section>
        </div>
    );
};

export default ItemCount
