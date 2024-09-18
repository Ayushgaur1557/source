import { Avatar } from '@mui/material'
import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5 
    lg:px-10, flex justify-between items-center'> 

    <p className='font-bold text-lg'> Limbo Task Manager </p>

    <div className='flex items-center gap-5'>
        <p>codewithlimbo</p>
        <Avatar src='https://tse4.mm.bing.net/th?id=OIP.uMOlgOEPHQi6nimCisQfcgHaEK&pid=Api&P=0&h=180'>C  </Avatar>
    </div>

    </div>
  )
}

export default Navbar