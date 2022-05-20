import React, { useState } from "react"
import { useAppContext } from "../components/context/AppContext"
import { useCartContext } from "../components/context/CartContext"

const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(0)

	const { addToCart } = useCartContext () 
	const { productos } = useAppContext()
	
	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
			 
		}
	}
	const handleRemove = () => {
		if (count > 0) {
			setCount(count - 1)
			 
		}
	}

	const handleClick = (id, cantidad) => {
		const findProduct = productos.find(producto => producto.id === id)
		addToCart(findProduct, cantidad)

		if (!findProduct) {
			alert("No se encontro el producto")
			return 
		}
		
		addToCart(findProduct, cantidad)
		onAdd(count)
	}

	return (
		<>
			<div className="flex justify-center">
				<button
					className="bg-primary text-white btn-block"
					onClick={handleRemove}
					 
				>
					-
				</button>
				<span className="text-5xl">{ count }</span>
				<button
					className="bg-primary text-white btn-block"
					onClick={handleAdd}
				>
					+
				</button>
			</div>
			 
			<button
				className="bg-primary text-white btn-block"
				onClick={() => handleClick(id, count)}
				
			>
				Agregar al carrito
			</button> 
		</>
	)
}

export default ItemCount
