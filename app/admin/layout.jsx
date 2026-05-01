"use client"
import SideBar from "../components/admin/SideBar"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/navigation";
import Protected from "../components/admin/Protected"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";



export default function AdminLayout({ children }) {
   const [isOpen, setIsOpen] = useState(false);
  
  const { logout } = useAuth()
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Logout successfully.")
    router.push('/admin/login')

  }
  return (
    <Protected>

      <div className="">
        <div className="fixed top-0 left-0 h-screen hidden md:block ">

          <SideBar />
        </div>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center py-8 px-6 md:px-8 lg:px-12 
                          border-b border-[#166534] bg-white fixed top-0 left-0 md:left-52 lg:left-64 right-0 h-1 z-[1000]">
            <h1 className="text-lg font-bold text-[#166534] flex-1">Admin Dashboard</h1>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="block md:hidden text-[#166534]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <button onClick={handleLogout} className="text-lg font-bold text-red-500 hover:text-red-400 cursor-pointer hidden md:block">Logout</button>
          </div>

          {isOpen && (
          <>
            <div className="bg-black/40 fixed inset-0 backdrop-blur-md z-20"
                onClick={() => setIsOpen(false)}></div>
            <div className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg z-70 flex flex-col p-6 space-y-14 text-xl items-start text-[#166534] hover:text-red-700 uppercase font-bold">
              <button 
                  onClick={() => setIsOpen(false)} 
                  className="self-end text-[#0E2470]"
                >
                  <X size={28} />
                </button>
              
              <Link href="/admin" onClick={() => setIsOpen(false)}>Overview</Link>
              <Link href="/admin/shipments" onClick={() => setIsOpen(false)}>Shipments</Link>
              <Link href="/admin/create" onClick={() => setIsOpen(false)}>Create Shipments</Link>

              <button onClick={handleLogout} className="text-xl uppercase font-bold text-red-500 hover:text-red-400 cursor-pointer">Logout</button>
              
            </div>
          </>
        )}
              
          <main className="ml-0 md:ml-52 lg:ml-64 mt-12 min-h-screen bg-gray-200">{children}</main>
        </div>

        
      </div>
    </Protected>

  )
}