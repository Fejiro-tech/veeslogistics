"use client"
import Navbar from "../components/layout/Navbar";
import SideBar from "../components/admin/SideBar"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/navigation";
import Protected from "../components/admin/Protected"


export default function AdminLayout({ children }) {
  
  const { logout } = useAuth()
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/admin/login')
  }
  return (
    <Protected>

      <div className="">
        <div className="fixed top-0 left-0 h-screen hidden md:block ">

          <SideBar />
        </div>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center py-8 px-12 
                          border-b border-[#1D4DB5] bg-white fixed top-0 left-0 md:left-64 right-0 h-1">
            <h1 className="text-lg font-bold text-[#0E2470]">Admin Dashboard</h1>
            <button onClick={handleLogout} className="text-lg font-bold text-red-500 hover:text-red-400 cursor-pointer">Logout</button>
          </div>
          <main className="ml-0 md:ml-64 mt-12 min-h-screen">{children}</main>
        </div>
      </div>
    </Protected>

  )
}