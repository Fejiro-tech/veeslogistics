'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import { useAuth } from "../../../context/AuthContext"
import Image from 'next/image'

const Page = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const { login, loginLoading } = useAuth()
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!loginData.email || !loginData.password) {
      alert("Email & Password is required")
      return
    }

    const { success, error } = await login(loginData.email, loginData.password)

    console.log("success:", success)
    console.log("error:", error)

    if (success) {
      router.push('/admin')
    } else {
      alert(error?.message || "Invalid credentials")
    }
  }

  return (
    <div className='h-screen w-full'>
      <div className='max-w-360 mx-auto w-full flex justify-center items-center h-screen px-6'>
        <form onSubmit={handleLogin} className='w-full max-w-180 mx-auto bg-[#166534] p-4 md:p-10 rounded-2xl'>
          <Image
            src='/images/logo2.png'
            alt="logo"
            width={100}
            height={100}
            className="w-20 h-auto md:w-25 lg:w-30"
          />

          <h1 className='text-white font-bold text-2xl'>[LOGO]</h1>
          <p className='mt-2 text-lg text-gray-300 font-medium'>Sign in to your admin account.</p>

          <div className='mt-8 flex flex-col gap-2'>
            <label className='text-white font-medium text-base md:text-lg'>Email</label>
            <input
              type="email"
              name='email'
              onChange={handleChange}
              placeholder='admin@logistics.com'
              className='border border-white rounded p-2 outline-0 focus:border-yellow-400 text-sm md:text-base placeholder:text-gray-300 text-white'
            />
          </div>

          <div className='mt-4 flex flex-col gap-2'>
            <label className='text-white text-base md:text-lg font-medium'>Password</label>
            <input
              type="password"
              name='password'
              onChange={handleChange}
              className='border border-white rounded p-2 outline-0 focus:border-yellow-400 text-sm md:text-base text-gray-300'
            />
          </div>

          <button
            type="submit"
            disabled={loginLoading}
            className='text-[#166534] font-medium w-full bg-white hover:bg-gray-100 p-4 mt-6 rounded cursor-pointer text-sm md:text-base disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {loginLoading ? <span className="animate-pulse">Signing in...</span> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page