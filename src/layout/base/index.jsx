import React from 'react'
import { Outlet } from 'react-router-dom'



export default function Index() {

  return (
    <div className='base-layout'>
      <div className='main'>
        <div className='page-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
