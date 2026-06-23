'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import { useAuth } from "../../../context/AuthContext"
import Image from 'next/image'
import { Eye, EyeOff } from "lucide-react"

const Page = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState(false)

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

    const { success, error } = await login(
      loginData.email,
      loginData.password
    )

    if (success) {
      router.push('/admin')
    } else {
      alert(error?.message || "Invalid credentials")
    }
  }

  return (
    <div className='h-screen w-full'>
      <div className='max-w-360 mx-auto w-full flex justify-center items-center h-screen px-6'>

        <form
          onSubmit={handleLogin}
          className='w-full max-w-180 mx-auto bg-[#166534] p-4 md:p-10 rounded-2xl'
        >

          <Image
            src='/images/logo2.png'
            alt="logo"
            width={100}
            height={100}
            className="w-20 h-auto md:w-25 lg:w-30"
          />

          <p className='mt-2 text-lg text-gray-300 font-medium'>
            Sign in to your admin account.
          </p>

          {/* EMAIL */}
          <div className='mt-8 flex flex-col gap-2'>
            <label className='text-white font-medium text-base md:text-lg'>
              Email
            </label>

            <input
              type="email"
              name='email'
              onChange={handleChange}
              placeholder='admin@logistics.com'
              className='border border-white rounded p-2 outline-0 focus:border-yellow-400 text-sm md:text-base placeholder:text-gray-300 text-white'
            />
          </div>

          {/* PASSWORD WITH EYE */}
          <div className='mt-4 flex flex-col gap-2'>
            <label className='text-white text-base md:text-lg font-medium'>
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                onChange={handleChange}
                className='w-full border border-white rounded p-2 pr-10 outline-0 focus:border-yellow-400 text-sm md:text-base text-gray-300'
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-yellow-300 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loginLoading}
            className='text-[#166534] font-medium w-full bg-white hover:bg-gray-100 p-4 mt-6 rounded cursor-pointer text-sm md:text-base disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {loginLoading ? (
              <span className="animate-pulse">Signing in...</span>
            ) : (
              "Sign In"
            )}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Page