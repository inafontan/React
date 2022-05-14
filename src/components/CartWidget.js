const CartWidget = () => {
  return (
     <div class="navbar bg-base-10">
  <div class="flex-1">
     
  </div>
  <div class="flex">
    <div class="dropdown dropdown-end">
       
      <div tabindex="0" class="mt-1 card card-compact dropdown-content w-0 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-m">- Items</span>
          <span class="text-info">Subtotal: $</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
     
  </div>
</div>
  )
}

export default CartWidget