import Image from 'next/image'

const SideBar = () => {
  return (
    <aside className="w-54 md:w-52 lg:w-64 h-screen bg-white
                      border-r border-[#166534]
                      flex flex-col
                      px-6 py-2">

      <Image 
        src='/images/logo2.png'
        alt="logo"
        width={100}
        height={100}
        className=" w-20 h-auto md:w-25 lg:w-30 "
      />

      {/* Nav links */}
      <nav className="flex flex-col space-y-10 text-lg mt-6 text-[#166534]">
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
    
      </nav>
    </aside>
  )
}


export default SideBar