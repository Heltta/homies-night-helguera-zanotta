import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => 
        cartList.some( (listItem) => listItem.id === id );

    const isCartEmpty = () => 
        cartList.length === 0;

    const addToCart = (objItem) =>{
        if( !isInCart( objItem.id) ){
            setCartList([ 
                ...cartList,
                objItem ])
        }
    }

    const clearCart = () => setCartList([]);

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            isCartEmpty
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
export {useCartContext}
