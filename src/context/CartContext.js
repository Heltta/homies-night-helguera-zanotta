import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => 
        cartList.some( (listItem) => listItem.id === id );

    const isCartEmpty = () => 
        cartList.length === 0;

    const cartSize = () =>
        //Amount of different items inside cart
        cartList.length

    const addToCart = (objItem, amount) =>{
        if( !isInCart( objItem.id) ){
            setCartList([ 
                ...cartList,
                { ...objItem, quantity: (amount)} ])
        }else{
            const tempList = [...cartList];
            const itemIndex = tempList.findIndex((item)=>item.id === objItem.id);
            tempList[itemIndex].quantity += amount;
            //Check and fix if item quantity in cart
            //is greater than stock
            (tempList[itemIndex].quantity > tempList[itemIndex].stock) 
                && (tempList[itemIndex].quantity = tempList[itemIndex].stock);
            setCartList(
                tempList
            );
        }

    }

    const clearCart = () => setCartList([]);

    const removeItem = (id) =>{
        if(isInCart(id)){
            setCartList(
                cartList.filter(
                    (listItem) => listItem.id !== id
                )
            )
        }
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            isCartEmpty,
            removeItem,
            cartSize,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
export {useCartContext}
