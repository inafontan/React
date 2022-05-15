import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])          

    const isInCart = (id) => cart.find((item) => item.id === id)   // busca si el producto ya esta en el carrito

    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]

        const productoIsInCart = isInCart(producto.id)

        if (productoIsInCart) {
            newCart[
                newCart.findIndex((item) => item.id === productoIsInCart.id)
            ].quantity += cantidad

            setCart(newCart)
            return
        }
        
        producto.quantity = cantidad
        setCart([...newCart, producto])
    }

    const removeFromCart = (id) => {
        const newCart = [...cart]

        const productoIsInCart = isInCart(id)

        if (!productoIsInCart) {
            return
        }

        const deleteProducto = newCart.filter((item) => item.id === id)

        setCart(deleteProducto)
    }

    const deleteCart = () => setCart([])
    console.log (cart)    

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                deleteCart,
                setCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider