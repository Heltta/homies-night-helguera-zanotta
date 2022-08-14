import { createContext, useCallback, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => 
        cartList.some( (listItem) => listItem.id === id );

    const isCartEmpty = useCallback(() => {
        return (cartList.length === 0);
    }, [cartList]);

    const cartSize = () =>{
        //Returns total Amount of items inside cart
        let totalAmount = 0;
        cartList.forEach(item => totalAmount += item.quantity);
        return totalAmount
    }

    const cartCost = () =>{
        //Returns total Amount of items inside cart
        let totalCost = 0;
        cartList.forEach(item => totalCost += item.price*item.quantity);
        return totalCost

    }

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

    useEffect(()=>{
        //Save cartList to localStorage
        if(!isCartEmpty()){
            localStorage.setItem(
                'cart',
                JSON.stringify(cartList)
            );
        }
    }, [cartList, isCartEmpty])

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            isCartEmpty,
            removeItem,
            cartSize,
            cartCost,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
export {useCartContext}
