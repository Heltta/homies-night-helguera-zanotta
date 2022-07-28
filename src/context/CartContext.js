import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => 
        cartList.some( (listItem) => listItem.id === id );


    const addToCart = (objItem) =>{
        if( !isInCart( objItem.id) ){
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
