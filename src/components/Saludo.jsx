const Saludo = (props) => {
    return (
        <>
            <h1 style={{
                color: 'white', fontFamily:'monospace',fontSize: '20px', background: 'purple',
                padding: '5px', margin: '5px', boxShadow: ' 0 0.125rem 0.3125rem 0 rgba(2, 2, 0, 0.678)'
            }}> Bienvenidos a la tienda {props.nombre}</h1>
             <h2 style= {{ fontFamily:'monospace', fontSize:'20px',fontWeight:'bold', padding: '10px', margin:'10px'}}> Productos </h2>
        </>
    )
}

export default Saludo;