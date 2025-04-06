import React from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import { IoPeople } from 'react-icons/io5'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function Dashboard() {


 
  return (
    <div className='bg-[#FFFFFF] h-screen w-full'>
      <div className='flex justify-between  gap-10 p-4'>
        <div className='w-[370px] shadow-xl'>
          <div className='shadow-[Drop Shadow/600px] flex items-center justify-between px-20 py-6 '>
            <IoPeople />
            <div>
              <p>10</p>
              <p className='text-[#8CAB91] text-[16px] shadow-2xl'>total User</p>
            </div>
          </div>

        </div>
        <div className='w-[370px] shadow-xl'>
          <div className='shadow-[Drop Shadow/600px] flex items-center justify-between px-20 py-6 '>
            <IoPeople />
            <div>
              <p>10</p>
              <p className='text-[#8CAB91] text-[16px] shadow-2xl'>total User</p>
            </div>
          </div>

        </div>
        <div className='w-[370px] shadow-xl'>
          <div className='shadow-[Drop Shadow/600px] flex items-center justify-between px-20 py-6 '>
            <IoPeople />
            <div>
              <p>10</p>
              <p className='text-[#8CAB91] text-[16px] shadow-2xl'>total User</p>
            </div>
          </div>

        </div>




      </div>


      <div className='flex justify-between gap-6 p-4'>
        {/* subscriber Growth */}
        <div className='  w-1/2'>
          <div className='flex justify-between '>
            <div className=''>
              <p className='text-[#0B1826] text-[18px] font-medium'>Subscriber Growth</p>
            </div>
            <div className='flex gap-2 items-center p-2 rounded-sm bg-[#F1F1F1]'>
              <span>Yearly</span>
              <IoIosArrowDown />
            </div>

          </div>
          <div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* user Growth */}
        <div className=' flex justify-between w-1/2'>
          <div className=''>
            <p className='text-[#0B1826] text-[18px] font-medium'>User Growth</p>
          </div>
          <div className='flex gap-2 items-center p-2 rounded-sm bg-[#F1F1F1]'>
            <span>Yearly</span>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard