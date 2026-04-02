'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext"
import Image from 'next/image'

const page = () => {

  const [loginData, setIsLoginData] = useState({
    email: "", password: ""
  })

  const { login } = useAuth();
  const router = useRouter()
  const { loading, setLoading} = useAuth();

  const handleChange = (e) => {
  const { name, value } = e.target
  setIsLoginData((prev) => ({
    ...prev,
    [name]: value
  }))
}

  const handleLogin = async (e) => {
  e.preventDefault();

  setLoading(true)

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
      <div className='max-w-360 mx-auto w-full flex justify-center items-center h-screen px-6'>
        <form onSubmit={handleLogin} className='w-full max-w-180 mx-auto  bg-white p-4 md:p-10 rounded-2xl '>
          <Image 
            src='/images/SwiftLogo.png'
            alt="logo"
            width={100}
            height={100}
            className=" w-25 h-10 md:w-35 lg:w-40 md:h-15"
          />
          <p className='mt-2 text-lg text-gray-800 font-medium'>Sign in to your admin account.</p>

          <div className='mt-8 flex flex-col gap-2'>
            <label className='text-[#1D4DB5] font-medium text-base md:text-lg' >Email</label>
            <input 
              type="email" 
              name='email'
              onChange={handleChange}
              placeholder='admin@logistics.com' 
              className='border border-[#1D4DB5] rounded p-2 outline-0 focus:border-yellow-400 text-sm md:text-base' 
            />
          </div>

          <div className='mt-4 flex flex-col gap-2'>
            <label className='text-[#1D4DB5] text-base md:text-lg font-medium'>Password</label>
            <input 
              type="password" 
              name='password'
              onChange={handleChange}
              className='border border-[#1D4DB5] rounded p-2 outline-0 focus:border-yellow-400 text-sm md:text-base'
            />
          </div>

          
          <button disabled={loading} className='text-white font-medium w-full bg-[#1D4DB5]  hover:bg-blue-700  p-4 mt-6 rounded cursor-pointer text-sm md:text-base'>
              {loading ?  <span className="animate-pulse">Signing in...</span> : "Sign In"}
          </button>
         


        </form>
      </div>
       
    </div>
  )
}

export default page