import React from 'react'
import useCartContext from './/context/CartContext'

function CartView() {
    const { cart, calcPrecioCart, deleteFromCart } = useCartContext()

    if (cart.length === 0) {
        return <div>No hay productos en el carrito</div>
    }
    return (
    <div>
        {cart.map((item => (
            <div key={item.id}>
                <p>{item.nombre}</p>
                <p>cantidad:{item.cant}</p>
                <p>precio:${item.precio}</p>
                <p>total: ${item.cant * item.precio}</p>
                <button onClick={() => deleteFromCart(item.id)}>Eliminar</button>
                <hr />
                <br />
                <br />
            </div>
        )))}
            <h1>Total de la compra: ${calcPrecioCart()}</h1>
        </div>
    )
}

export default CartView