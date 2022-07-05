import React, {useState} from 'react'
import {useCartContext} from './/context/CartContext'
import {Link} from "react-router-dom"


const styleCartView = {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: 'auto',
    margin: '20px',
    marginTop: '20px',
    marginLeft: '500px',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0px 1px 10px #000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    border: '2px solid #000000',
    borderRadius: '10px'
}
function CartView() {
    const {cart, deleteFromCart, calcPrecioCart} = useCartContext()

    if (cart.length === 0) {
        return <div style={styleCartView}>
            <p>No hay productos en el carrito
            </p>
            <button className="btn primary">
                <Link to="/">
                    Inicio
                </Link>
            </button>
        </div>
    }
    return (
        <div> {
            cart.map((producto => (
                <div style={styleCartView}
                    key={
                        producto.id
                }>
                    <div><img src={
                                producto.producto.imgUrl
                            }
                            style={
                                {
                                    width: '200px',
                                    height: '150px',
                                    marginTop: '20px'
                                }
                            }/>
                    </div>
                    <p>Artículo: {
                        producto.producto.name
                    }</p>
                    <p>Cantidad: {
                        producto.quantity
                    }</p>
                    <p>Precio Unitario: ${
                        producto.producto.precio
                    }</p>
                    <p>Total: ${
                        producto.producto.precio * producto.quantity
                    }</p>
                    <button onClick={
                        () => deleteFromCart(producto.producto.id)
                    }>Eliminar</button>
                </div>
            )))
        }
            <div style={styleCartView}>
                <h1>Total de la compra: ${
                    calcPrecioCart()
                }</h1>
                <button className="btn primary">
                    <Link to="/">
                        Inicio
                    </Link>
                </button>
                <button onClick>
                    Quiero finalizar la compra
                </button>
            </div>
        </div>
    )
}
export default CartView
