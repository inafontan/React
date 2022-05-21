//PRODUCTO EN EL INICIO DE LA PAGINA
import React from 'react';
import { Link } from 'react-router-dom';

const styleCards = {
	display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
	width: 'auto',
	height: 'auto',
	margin: '20px',
    marginTop: '20px',
	marginLeft: '30px',
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
	textDecoration: 'none',
 	border: '2px solid #000000',
	borderRadius: '10px',
}
const Item = ({ producto }) => {
	return (
		<>
			<div style={styleCards}>
				<figure>
					<img style={{
						margin: '20px', padding: '5px', marginLeft: '180px',
						width: 'auto', height: '200px'}} src={producto.imgUrl}   />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{producto.name}</h2>
 					{producto.descripción}
					<div className="inline-block align-bottom mr-5">
						<span className="font-bold text-5xl leading-none align-baseline">
							{producto.precio}
						</span>
					</div>
					<div className="card-actions justify-end">
						<Link to={`/product/${producto.id}`} className="btn btn-primary">
							Ver más
						</Link>
					</div>
				</div>
				</div>
			
		</>
	)
}

export default Item
export { styleCards }
