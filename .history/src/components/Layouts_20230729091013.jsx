import React from 'react'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
    
    <Header />
    <main className='App'>
        <Outlet />
      
    </main>
    </>
  )
}

export default Layouts
