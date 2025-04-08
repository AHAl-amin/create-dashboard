import React from 'react'

function OrderManagment() {
  return (
   <div>
    {/* order header list */}
     <div className='flex gap-3 justify-between'>
      <p>Order list</p> 
      <div className='flex gap-3'>
      <input type="text" placeholder='search' className='w-[326px]  bg-white p-2 rounded ' />
      <p className='bg-white w-[166px] p-2 text-gray-300'>status</p>
      </div>
    </div>
   </div>
  )
}

export default OrderManagment