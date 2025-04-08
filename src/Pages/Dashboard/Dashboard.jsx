import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoPeople } from 'react-icons/io5'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts'

const percentageData = [
  { name: 'Jan', uv: 20 },
  { name: 'Feb', uv: 80 },
  { name: 'Mar', uv: 70 },
  { name: 'Apr', uv: 90 },
  { name: 'May', uv: 100 },
  { name: 'Jun', uv: 75 },
  { name: 'Jul', uv: 95 },
  { name: 'Aug', uv: 65 },
  { name: 'Sep', uv: 85 },
  { name: 'Oct', uv: 55 },
  { name: 'Nov', uv: 70 },
  { name: 'Dec', uv: 50 },
];
const data = [
  { name: 'Jan', uv: 20 },
  { name: 'Feb', uv: 80 },
  { name: 'Mar', uv: 70 },
  { name: 'Apr', uv: 90 },
  { name: 'May', uv: 100 },
  { name: 'Jun', uv: 75 },
  { name: 'Jul', uv: 95 },
  { name: 'Aug', uv: 65 },
  { name: 'Sep', uv: 85 },
  { name: 'Oct', uv: 55 },
  { name: 'Nov', uv: 70 },
  { name: 'Dec', uv: 50 },
];
function Dashboard() {
  return (
    <div className='bg-[#FFFFFF] min-h-screen w-full p-4'>
      {/* Top Cards */}
      <div className='flex justify-between gap-6 mb-8'>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className='w-[370px] shadow-xl rounded-lg bg-white p-6 flex items-center justify-between'>
            <IoPeople className='text-3xl text-[#4B5563]' />
            <div className='text-right'>
              <p className='text-xl font-bold'>10</p>
              <p className='text-[#8CAB91] text-sm'>Total Users</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className='flex gap-6'>
        {/* Subscriber Growth */}
        <div className='w-1/2 bg-white p-4 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <p className='text-[#0B1826] text-lg font-semibold'>Subscriber Growth</p>
            <div className='flex items-center gap-2 bg-[#F1F1F1] px-2 py-1 rounded text-sm cursor-pointer'>
              <span>Yearly</span>
              <IoIosArrowDown />
            </div>
          </div>
          <div className='h-[440px]'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={percentageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey='uv' fill="#8CAB91" />
              </BarChart>

            </ResponsiveContainer>
          </div>
        </div>

        {/* User Growth */}
        <div className='w-1/2 bg-white p-4 rounded-lg shadow'>
          <div className='flex justify-between items-center mb-4'>
            <p className='text-[#0B1826] text-lg font-semibold'>User Growth</p>
            <div className='flex items-center gap-2 bg-[#F1F1F1] px-2 py-1 rounded text-sm cursor-pointer'>
              <span>Yearly</span>
              <IoIosArrowDown />
            </div>
          </div>
          <div className='h-[440px]'>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                 <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8CAB91" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
