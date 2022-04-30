 const ItemList = ( {itemInfo} ) => {
  return (
    <div style={{border:'solid purple 5px', margin:'10px', padding:'5px', width: '250px', height:'300px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <img src={itemInfo.imgUrl}/>
      <h1> <strong> {itemInfo.name}</strong></h1>
      <h2> <strong> {itemInfo.precio}</strong></h2>
    </div>
  )
}
export default ItemList;