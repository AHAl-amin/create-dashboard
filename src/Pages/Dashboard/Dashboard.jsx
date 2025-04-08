import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoEyeOutline, IoPeople } from 'react-icons/io5'
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
const icomReport = [
  { name: 'Jan', uv: 37 },
  { name: 'Feb', uv: 2 },
  { name: 'Mar', uv: 26 },
  { name: 'Apr', uv: 15 },
  { name: 'May', uv: 33 },
  { name: 'Jun', uv: 0 },
  { name: 'Jul', uv: 12 },
  { name: 'Aug', uv: 8 },
  { name: 'Sep', uv: 29 },
  { name: 'Oct', uv: 40 },
  { name: 'Nov', uv: 20 },
  { name: 'Dec', uv: 5 },
];



const subscriberData = [
  {
    "serial_no": 1,
    "image": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
    "name": "Alamin Hossain",
    "email": "mdalaminhossain573190@gmail.com",
    "contact_number": "+8801234567890",
    "location": "Dhaka, Bangladesh",
    "subscription_type": "Premium",
    "income": 1500,
  },
  {
    "serial_no": 2,
    "image": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
    "name": "Sarah Khan",
    "email": "sarah.khan@example.com",
    "contact_number": "+8801987654321",
    "location": "Chittagong, Bangladesh",
    "subscription_type": "Basic",
    "income": 800,
  },
  {
    "serial_no": 3,
    "image": "https://i.ibb.co.com/60hvPZRS/bannerimg-01.png",
    "name": "Rafiq Islam",
    "email": "rafiq.islam@example.com",
    "contact_number": "+8801765432109",
    "location": "Sylhet, Bangladesh",
    "subscription_type": "Standard",
    "income": 1200,
  }
];


function Dashboard() {
  return (
    <div>
      <div className='bg-[#FFFFFF]  w-full p-4'>
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
                    right: 0,
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


      {/* income report */}
      <div className='bg-white  my-4 p-4'>
        <div className='my-4  rounded-lg shadow p-4'>
          <div className='flex justify-between items-center '>
            <p className='text-[#0B1826] text-lg font-semibold'>Income Report</p>
            <div className='flex items-center gap-2 bg-[#F1F1F1] px-2 py-1 rounded text-sm cursor-pointer'>
              <span>Yearly</span>
              <IoIosArrowDown />
            </div>
          </div>
          <div className='h-[275px]'>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={icomReport}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  domain={[0, 40]} // Adjusted to match ticks
                  ticks={[0, 5, 10, 20, 30, 40]}
                  tickFormatter={(value) => `${value}k`}
                />
                <Tooltip formatter={(value) => `${value}k`} />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8CAB91"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>



      </div>

      {/* subscriber section */}

      <div className='bg-white p-4 mt-4'>
        <div className='overflow-x-auto'>

          <div className='flex justify-between py-4'>
            <div>
            <p>Subscriber</p>
            </div>
            <div className='space-x-2'>
            <input type="text" className=' border p-2 border-gray-300 w-[270px]' placeholder='search' />
            <input type="text" className='w-[166px] p-2 border border-gray-300  ' placeholder='subscriber' />
            <input type="text" className='w-[141px] border border-gray-300 p-2 ' placeholder='search'  />
            </div>
          </div>
          <table className='min-w-full table-auto'>
            <thead>
              <tr className='bg-[#F1F1F1]'>
                <th className='px-4 py-2 text-left text-sm font-semibold'>Serial No.</th>
                <th className='px-4 py-2 text-left text-sm font-semibold'>Name</th>
                <th className='px-4 py-2 text-left text-sm font-semibold'>Email</th>
                <th className='px-4 py-2 text-left text-sm font-semibold'>Contact Number</th>
                <th className='px-4 py-2 text-left text-sm font-semibold'>Location</th>
                <th className='px-4 py-2 text-left text-sm font-semibold'>Subscription Type</th>
                <th className='px-4 py-2 text-left text-sm font-semibold'>Income</th>
                <th className='px-4 py-2 text-left text-sm font-semibold'>Action</th>
              </tr>
            </thead>
            <tbody>
              {subscriberData.map((data, index) => (
                <tr key={index} className=''>
                  <td className='px-4 py-2 text-sm'>{data.serial_no}</td>
                  <td className='px-4 py-2 text-sm'>
                    <div className='flex items-center'>
                      <img src={data.image} alt={data.name} className='w-10 h-10 rounded-full mr-4' />
                      {data.name}
                    </div>
                  </td>
                  <td className='px-4 py-2 text-sm'>{data.email}</td>
                  <td className='px-4 py-2 text-sm'>{data.contact_number}</td>
                  <td className='px-4 py-2 text-sm'>{data.location}</td>
                  <td className='px-4 py-2 text-sm'>{data.subscription_type}</td>
                  <td className='px-4 py-2 text-sm'>{`$${data.income}`}</td>
                  <td className='px-4 py-2 text-sm'><IoEyeOutline /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



    </div>
  )
}

export default Dashboard
