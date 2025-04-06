import React from 'react'
import { Outlet } from 'react-router-dom'
import Sideber from '../../Pages/Sideber/Sideber'
import Navber from '../../Pages/Navber/Navber'

function Main() {
  return (
    <div className='flex h-screen bg-gray-100'> 
      <div className='bg-[#FAF1E6]  w-[280px] h-screen'>
        <Sideber></Sideber>
      </div>

      <div className='flex flex-col w-full '>
        <div className='w-full bg-[#FFFFFF]  py-3 fixed z-50'>
          <Navber></Navber>
        </div>
        <div className=' mt-20 overflow-auto p-5  '>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Main

