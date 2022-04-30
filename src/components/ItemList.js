 const ItemList = ( {itemInfo} ) => {
  return (
    <div style={{border:'solid purple 5px', margin:'10px', padding:'5px', width: '200px', height:'200px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <img src={itemInfo.imgUrl}/>
      <h1>{itemInfo.name}</h1>
      <h2>{itemInfo.precio}</h2>
    </div>
  )
}
export default ItemList;