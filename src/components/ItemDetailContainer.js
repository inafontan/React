import { useEffect, useState } from "react";


const ItemDetail = () => {

  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState( true )
  
  useEffect(() => {
    getInfo().then( data => {
        setInfo(data)
        setLoading(false)
    }
      )
  }, [])

    const getInfo = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(info)
            }, 2000)
        })
    }

    return (
        <>
        <div>
            {loading ? <div>Loading...</div> : <div>
                <div> ItemDetail - {info}</div>
                <strong> {info.id} </strong>
                <strong> {info.name} </strong>
                <strong> {info.precio} </strong>        
                <Link to="/"> Volver </Link>
            </div>} 
            </div>
        </>
    )
}