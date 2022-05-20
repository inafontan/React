import React, { createContext, useContext, useState } from "react"
import { productos } from "../../data/data"

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
                newCart.findIndex((prod) => prod.id === productoIsInCart.id)
            ].quantity += cantidad

            setCart(newCart)
            return
        }
        
        productos.quantity = cantidad
        setCart([...newCart, producto])
    }

    const deleteFromCart = (producto) => {
        const newCart = [...cart]

        const itemIsInCart = isInCart(producto.id)

        if (!itemIsInCart) {
            return
        }

        const deleteItem = newCart.filter((prod) => prod.id !== producto.id)

        setCart(deleteItem)
    }

    const deleteCart = () => setCart([])
      

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                deleteFromCart,
                deleteCart,
                setCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider