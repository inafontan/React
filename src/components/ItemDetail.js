import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
const ItemDetail = () => {

    const { infoId } = useParams()
    const [info, setInfoDetail] = useState({})
    
    useEffect(  () => {
        
        (async () => {
            const info = await getItemDetail()
            if (info) {
                setInfoDetail(info)
            }
        })()

    }, [infoId])

    const getItemDetail = () => {
        return new Promise ((resolve) => {
            setTimeout(() => { 
                resolve (info.find(item => item.id === infoId))
            }, 2000)
        })
    }

    return (
        <>
        <div> ItemDetail - {infoId}</div>
        <strong> {info.id} </strong>
        <strong> {info.name} </strong>
        <strong> {info.precio} </strong>
        
        <Link to="/"> Volver </Link>    
        </>
    )
}
export default ItemDetail

