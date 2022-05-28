import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)
const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])          

    const isInCart = (id) => cart.find((prod) => prod.id === id)   // busca si el producto ya esta en el carrito

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
        
        setCart([...newCart, {producto, quantity: cantidad}])
    }

    const deleteFromCart = (producto) => {
        const newCart = [...cart]

        const productoIsInCart = isInCart(producto.id)

        if (!productoIsInCart) {
            return
        }

        const deleteProducto = newCart.filter(
            (prod) => prod.id !== productoIsInCart.id)

        setCart(deleteProducto)
    }

    const deleteCart = () => setCart([])

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
                deleteCart,
                calcPrecioCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
    }

export default CartContextProvider