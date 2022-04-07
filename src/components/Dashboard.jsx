import React from 'react'
import avatar from '../images/avatar.jpg'

const Dashboard = () => {
  return (
      <div className='container grid grid-cols-7 bg-slate-50'>
          <div className='flex-0 bg-white space-y-16 px-8 text-right drop-shadow-lg pt-10'>
            <div><img src={avatar} alt="" className='rounded-[50%] w-12 h-12 float-right'/></div>
            <div>Residents</div>
            <div>Visitors</div>
            <div>Payment</div>
            <div>Estates</div>
            <div>Staffs</div>
              <div>
                  <h1 className='text-xs'>Estate Management</h1>
            </div>
          </div>
          <div className='col-span-6 ...'>
              <div className='flex justify-between pt-14 bg-white'>
                  <div className='font-bold pl-5'>Dashboard</div>
                  <div><input type="text" placeholder='Search here' name="" id="" className='bg-slate-50 px-3 py-1 w-96 rounded-[50px]' /></div>
                  <div className='flex gap-3'>
                      <div>notification-icon</div>
                      <div className='flex gap-3'>
                          <div>Profile-Image</div>
                          <div>
                              <div>Profile-Name</div>
                              <div>Role</div>
                          </div>
                          <div>Language</div>
                     </div>
                      
                  </div>
              </div>
              <div className='flex justify-between bg-white mt-5'>
                  <div className='flex justify-between'>
                      <div>Total Resident</div>
                      <div>key icon</div>
                  </div>
                  <div className='flex justify-between gap-2'>
                      <div>Active Visitors</div>
                      <div>Active visitors Icon</div>
                  </div>
                  <div className='flex justify-between gap-2'>
                      <div>Check In</div>
                      <div>Check In Icon</div>
                  </div>
                  <div className='flex justify-between gap-2'>
                      <div>Check Out</div>
                      <div>Check Out Icon</div>
                  </div>
              </div>
              <div className='flex justify-between bg-white mt-5'>
                  <div>Total Payment</div>
                  <div>Pie Chart</div>
                  <div>Calendar</div>
              </div>
              <div className='grid grid-cols-7'>
                <div className='flex justify-between bg-white mt-5 border-2  col-span-6 ...'>
                    <h1>Title</h1>
                    <h1>Category</h1>
                    <h1>Date</h1>
                    <h1>Priority</h1>
                  </div>
                  <div className='bg-white mt-5 border-2'>
                      <h1>Recent Payments</h1>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Dashboard