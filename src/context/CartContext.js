import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([]);

    const addToCart = (objItem) =>{
        if( !cartList.some( (listItem) => listItem.id === objItem.id)){
            setCartList([ 
                ...cartList,
                objItem ])
        }
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
export {useCartContext}
