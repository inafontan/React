import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.find((prod) => prod.id === id)   // busca si el producto ya esta en el carrito

    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]

        const productoEnCart = isInCart(producto.id)

        if (productoEnCart) {
            productoEnCart.quantity += cantidad
        } else {
            newCart.push({
                id: producto.id,
                producto,
                quantity: cantidad
            })
        }

        setCart(newCart)
    }

    const deleteFromCart = (id) => {
        const newCart = [...cart]

        newCart.splice(
            newCart.findIndex((prod) => prod.id === id), 
            1
        )

        setCart(newCart)
    } 

    const calcPrecioCart = () => {
        let total = 0
        cart.forEach((item) => {
            total += item.producto.precio * item.quantity
        })
        return total
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                deleteFromCart,
                calcPrecioCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}



export default CartContextProvider