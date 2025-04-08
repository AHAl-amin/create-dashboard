import { ChevronDown, FileQuestion, Mountain, Settings, ShieldUser } from 'lucide-react';
import React, { useState } from 'react'
import { CiCalendar } from 'react-icons/ci';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Sideber() {
    const [active, setActive] = useState(null);
    return (
        <div className='pl-4 relative min-h-screen '>
            <div className=' py-4'>
                Logo
            </div>
            <Link
                to="/dashboard"
                onClick={() => setActive('dashboard')}
                className={`flex items-center h-[72px] gap-2 mt-12 px-3 py-2 font-semibold rounded-l-md transition-colors duration-200
        
                    ${active === 'dashboard' ? 'bg-[#8CAB91] text-white' : 'text-[#364636] '}`}
            >
                <MdDashboard />
                <p>Dashboard</p>
            </Link>
            <Link
                to="/orders"
                onClick={() => setActive('orders')}
                className={`flex items-center h-[72px] gap-2 mt-2  px-3 py-2 font-semibold rounded-l-md transition-colors duration-200
        
                    ${active === 'orders' ? 'bg-[#8CAB91] text-white' : 'text-[#364636] '}`}
            >
                <CiCalendar />
                <p>Order management </p>
            </Link>
            <Link
                to="/addquestion"
                onClick={() => setActive('addquestion')}
                className={`flex items-center h-[72px] gap-2 mt-2  px-3 py-2 font-semibold rounded-l-md transition-colors duration-200
        
                    ${active === 'addquestion' ? 'bg-[#8CAB91] text-white' : 'text-[#364636] '}`}
            >
               <FileQuestion />
                <p>Add questionnaire </p>
            </Link>
            <Link
                to="/makeadmin"
                onClick={() => setActive('makeadmin')}
                className={`flex items-center h-[72px] gap-2 mt-2  px-3 py-2 font-semibold rounded-l-md transition-colors duration-200
        
                    ${active === 'makeadmin' ? 'bg-[#8CAB91] text-white' : 'text-[#364636] '}`}
            >
              <ShieldUser />
                <p>Make Admin </p>
            </Link>
            <Link
                to="/managesubscribers"
                onClick={() => setActive('managesubscribers')}
                className={`flex items-center h-[72px] gap-2 mt-2  px-3 py-2 font-semibold rounded-l-md transition-colors duration-200
        
                    ${active === 'managesubscribers' ? 'bg-[#8CAB91] text-white' : 'text-[#364636] '}`}
            >
             <Mountain />


                <p className='text-[14px]'>Manage Subscription </p>
                <ChevronDown />
            </Link>
            <Link
                to="/settings"
                onClick={() => setActive('settings')}
                className={`flex items-center h-[72px] gap-2 mt-2  px-3 py-2 font-semibold rounded-l-md transition-colors duration-200
        
                    ${active === 'settings' ? 'bg-[#8CAB91] text-white' : 'text-[#364636] '}`}
            >
             <Settings />
                <p>Settings</p>
                <ChevronDown />
            </Link>

            <div className='absolute bottom-20 right-20'>
            <div className='flex items-center'>
            <FaArrowRightFromBracket className='text-red-500' /> <span className='ml-2'>log out</span>
            </div>
            </div>


        </div>
    )
}

export default Sideber