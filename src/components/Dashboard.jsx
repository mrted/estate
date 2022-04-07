import React from 'react'

const Dashboard = () => {
  return (
      <div className='container flex gap-11 mx-auto'>
          <div className='flex-0 w-24'>
            <div>Dashboard</div>
            <div>Residents</div>
            <div>Visitors</div>
            <div>Payment</div>
            <div>Estates</div>
            <div>Staffs</div>
              <div>
                  <h1 className='text-xs'>Estate Management</h1>
            </div>
          </div>
          <div className='flex-1'>
              <div className='flex justify-between'>
                  <div>Dashboard</div>
                  <div><input type="text" placeholder='Search here' name="" id="" /></div>
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
              <div className='flex justify-between'>
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
              <div className='flex justify-between'>
                  <div>Total Payment</div>
                  <div>Pie Chart</div>
                  <div>Calendar</div>
              </div>
              <div className='flex justify-between'>
                <div className='flex justify-between gap-12'>
                    <h1>Title</h1>
                    <h1>Category</h1>
                    <h1>Date</h1>
                    <h1>Priority</h1>
                  </div>
                  <div>
                      <h1>Recent Payments</h1>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Dashboard