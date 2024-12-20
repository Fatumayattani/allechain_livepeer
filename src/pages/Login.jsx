import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // Add your login logic here
    navigate('/player')
  }

  return (
    <div className='h-screen flex items-center justify-center bg-gray-800 text-white'>
      <div>
        <h1 className='text-4xl mb-6'>Login Page</h1>
        <button 
          onClick={handleLogin} 
          className='bg-blue-500 px-4 py-2 rounded'>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
