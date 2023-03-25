import React from 'react'

export const Nav = () => {
  return (
    <div className='navbar flex items-center justify-around'> 
        <figure>
            <i class="fa-solid fa-cloud text-5xl text-blue-500"></i>        
        </figure>
        <div className='flex items-center justify-around w-1/2 p-4'>
            <a href="/home">Home</a> 
            <a href="/about">About</a> 
            <a href="/contact">Contact</a> 
            <a href="/services">Services</a> 
        </div>
   
    </div>
  )
}
