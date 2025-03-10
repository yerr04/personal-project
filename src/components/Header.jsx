import React from 'react'
import {FaSearch} from 'react-icons/fa'

export default function () {
  return (
    <header className='bg-[#161B33] text-white p-4 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-1'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-[#575c93]'>Kpop</span>
            <span className='text-[#f09ce2]'>Shop</span>
        </h1>
        <form className='bg-slate-400 p-2 rounded-lg flex items-center'>
            <input type='text' placeholder='Search'
            className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-gray-500' />
        </form>
        <ul className='flex gap-4'>
            <li className='hidden sm:inline'>Home</li>
            <li className='inline-block mx-4'>About</li>
            <li className='inline-block mx-4'>Sign In</li>
        </ul>
        </div>
    </header>
  )
}
