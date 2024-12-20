import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-800 text-white'>
      <div>
        <h1 className='text-4xl mb-6'>Welcome to the Music App</h1>
        <Link to='/login' className='text-blue-500 underline'>
          Go to Login
        </Link>
      </div>
    </div>
  )
}

export default Home

