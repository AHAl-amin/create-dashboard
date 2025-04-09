import React, { useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5'

function OrderManagment() {
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (order) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedOrder(null)
    setIsModalOpen(false)
  }

  const orderData = [
    {
      serial_no: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      email: "john.doe@example.com",
      contact_number: "+880-1711-000001",
      status: "Confirm",
      location: "Dhaka, Bangladesh"
    },
    {
      serial_no: 2,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact_number: "+880-1711-000002",
      status: "Cancel",
      location: "Chattogram, Bangladesh"
    },
    {
      serial_no: 3,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Michael Johnson",
      email: "michael.j@example.com",
      contact_number: "+880-1711-000003",
      status: "Confirm",
      location: "Sylhet, Bangladesh"
    },
    {
      serial_no: 4,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Emily Davis",
      email: "emily.d@example.com",
      contact_number: "+880-1711-000004",
      status: "Pending",
      location: "Rajshahi, Bangladesh"
    },
    {
      serial_no: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Chris Lee",
      email: "chris.lee@example.com",
      contact_number: "+880-1711-000005",
      status: "Confirm",
      location: "Khulna, Bangladesh"
    },
    {
      serial_no: 6,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Sarah Miller",
      email: "sarah.m@example.com",
      contact_number: "+880-1711-000006",
      status: "Cancel",
      location: "Barishal, Bangladesh"
    },
    {
      serial_no: 7,
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "David Wilson",
      email: "david.w@example.com",
      contact_number: "+880-1711-000007",
      status: "Confirm",
      location: "Rangpur, Bangladesh"
    },
    {
      serial_no: 8,
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Laura Brown",
      email: "laura.b@example.com",
      contact_number: "+880-1711-000008",
      status: "Pending",
      location: "Mymensingh, Bangladesh"
    },
    {
      serial_no: 9,
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "James Anderson",
      email: "james.a@example.com",
      contact_number: "+880-1711-000009",
      status: "Cancel",
      location: "Narsingdi, Bangladesh"
    },
    {
      serial_no: 10,
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Anna Martinez",
      email: "anna.m@example.com",
      contact_number: "+880-1711-000010",
      status: "Confirm",
      location: "Cumilla, Bangladesh"
    },
    {
      serial_no: 11,
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "Brian Taylor",
      email: "brian.t@example.com",
      contact_number: "+880-1711-000011",
      status: "Pending",
      location: "Jessore, Bangladesh"
    }
  ];

  return (
    <div className="relative">
      {/* order header list */}
      <div className='flex gap-3 justify-between mb-4'>
        <p>Order list</p>
        <div className='flex gap-3'>
          <input type="text" placeholder='search' className='w-[326px] bg-white p-2 rounded ' />
          <p className='bg-white w-[166px] p-2 text-gray-300'>status</p>
        </div>
      </div>

      {/* table */}
      <div>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-[#e7e2e2] my-2">
              <th className="px-4 py-2 text-left text-sm font-semibold">S_No.</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Contact Number</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Status</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Location</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((data) => (
              <tr key={data.serial_no}>
                <td className="px-4 py-2 text-sm">{data.serial_no}</td>
                <td className="px-4 py-2 text-sm">
                  <div className="flex items-center">
                    <img src={data.image} alt={data.name} className="w-10 h-10 rounded-full mr-4" />
                    {data.name}
                  </div>
                </td>
                <td className="px-4 py-2 text-sm">{data.email}</td>
                <td className="px-4 py-2 text-sm">{data.contact_number}</td>

                {/* conditionali status color */}
                <td
                  className={`px-4 py-2 text-sm font-semibold ${data.status === 'Cancel'
                      ? 'text-red-500'
                      : data.status === 'Confirm'
                        ? 'text-green-500'
                        :  'text-gray-500'
                    }`}
                >
                  {data.status}
                </td>
                <td className="px-4 py-2 text-sm">{data.location}</td>
                <td className="px-4 py-2 text-sm cursor-pointer" onClick={() => openModal(data)}>
                  <IoEyeOutline />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[400px] relative">
            <button className="absolute top-2 right-2 text-red-500" onClick={closeModal}>✖</button>
            <div className="flex items-center mb-4">
              <img src={selectedOrder.image} alt={selectedOrder.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h2 className="text-lg font-bold">{selectedOrder.name}</h2>
                <p className="text-sm text-gray-500">{selectedOrder.status}</p>
              </div>
            </div>
            <p><strong>Email:</strong> {selectedOrder.email}</p>
            <p><strong>Contact:</strong> {selectedOrder.contact_number}</p>
            <p><strong>Location:</strong> {selectedOrder.location}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderManagment
