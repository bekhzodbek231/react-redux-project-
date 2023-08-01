import React from 'react'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
    
    <Headers />
    <main className='App'>
        <Outlet />
      
    </main>
    </>
  )
}

export default Layouts
