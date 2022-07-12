import React, {useState} from "react"

function ItemCount(props){
    const [count, setCount] = useState(props.initial);
    const sumar = () =>{
        if(count<props.stock){
            setCount(count+1);
        }
    }
    const restar = () =>{
        if(0<count){
            setCount(count-1);
        }
    }
    return (
        <div>
            <button onClick={()=> restar()}>-</button>
            <span>{count}</span>
            <button onClick={()=> sumar()}>+</button>
        </div>
    );
};

export default ItemCount
