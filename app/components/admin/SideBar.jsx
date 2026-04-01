import React from 'react'
import Image from 'next/image'

const SideBar = () => {
  return (
    <aside className="w-54 md:w-64 h-screen bg-white
                      border-r border-[#1D4DB5]
                      flex flex-col
                      px-6 py-2">

      <Image 
        src='/images/SwiftLogo.png'
        alt="logo"
        width={100}
        height={100}
        className=" w-25  h-10 md:w-35 lg:w-30 md:h-15"
      />

      {/* Nav links */}
      <nav className="flex flex-col space-y-10 text-lg mt-6 text-[#0E2470]">
        <a href="/admin" className=" hover:text-red-700 
                                font-bold transition">
          Overview
        </a>
        <a href="/admin/shipments" className=" 
                                              hover:text-red-700 
                                              font-bold transition">
          Shipments
        </a>
        <a href="/admin/create" className="
                                           hover:text-red-700 
                                           font-bold transition">
          Create Shipments
        </a>
        <a href="/settings" className="
                                       hover:text-red-700 
                                       font-bold transition">
          Settings
        </a>
      </nav>
    </aside>
  )
}


export default SideBar