import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'

function Navber() {
    return (
        <div className=''>
            <div className=' flex justify-end items-center  container gap-4'>

                <IoMdNotificationsOutline className='bg-[#0000001A] p-2 rounded-full size-10'/>
                <div className='flex  items-center gap-2'>
                    <img className='w-12 h-12 rounded-full' src="https://img.freepik.com/free-photo/posing-athletes-holding-weights_23-2148398787.jpg?t=st=1743865025~exp=1743868625~hmac=13d95b229b7fe05e72643f52a0c5b9a7c7dc2ae41c00ee82770d3a15b6f908ea&w=740" alt="" />
                    <h1>Al-amin</h1>
                    
                </div>
            </div>



        </div>
    )
}

export default Navber


