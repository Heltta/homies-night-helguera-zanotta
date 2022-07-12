import React, {Component, useState} from "react"

function ItemCount(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=> setCount(count-1)}>-</button>
            <span>{count}</span>
            <button onClick={()=> setCount(count+1)}>+</button>
        </div>
    );
};

export default ItemCount
