import React, { createContext, useContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext({});

export default function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) === undefined) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreaseCartQuantity = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) === undefined) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeItemFromCart = (id) => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                getItemsQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeItemFromCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};
