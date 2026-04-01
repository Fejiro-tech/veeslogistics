'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext"

const page = () => {

  const [loginData, setIsLoginData] = useState({
    email: "", password: ""
  })

  const { login } = useAuth();
  const router = useRouter()

  const handleChange = (e) => {
  const { name, value } = e.target
  setIsLoginData((prev) => ({
    ...prev,
    [name]: value
  }))
}

  const handleLogin = async (e) => {
  e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Email & Password is required")
      return;
    }

    const success = await login(loginData.email, loginData.password)

    if (success) {
      router.push('/admin');
    } else {
      alert("Invalid credentials")
    }
  }

    return (
      <div className='bg-[#1D4DB5]/30 h-screen w-full'>
      <div className='max-w-360 mx-auto w-full flex justify-center items-center h-screen'>
        <form onSubmit={handleLogin} className='w-full max-w-180 mx-auto  bg-white p-10 rounded-2xl'>
          <h2 className="text-[#1D4DB5] font-bold text-4xl">[Logo]</h2>
          <p className='mt-2 text-lg text-gray-800 font-medium'>Sign in to your admin account.</p>

          <div className='mt-8 flex flex-col gap-2'>
            <label className='text-[#1D4DB5] text-lg font-medium'>Email</label>
            <input 
              type="email" 
              name='email'
              onChange={handleChange}
              placeholder='admin@logistics.com' 
              className='border border-[#1D4DB5] rounded p-2 outline-0 focus:border-yellow-400' 
            />
          </div>

          <div className='mt-8 flex flex-col gap-2'>
            <label className='text-[#1D4DB5] text-lg font-medium'>Password</label>
            <input 
              type="password" 
              name='password'
              onChange={handleChange}
              className='border border-[#1D4DB5] rounded p-2 outline-0 focus:border-yellow-400'
            />
          </div>

          
          <button className='text-white text-lg font-medium w-full bg-[#1D4DB5]  hover:bg-blue-700  p-4 mt-8 rounded cursor-pointer'>Sign In</button>
         


        </form>
      </div>
       
    </div>
  )
}

export default page