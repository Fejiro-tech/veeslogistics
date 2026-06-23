"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { Menu, X } from "lucide-react";

const Navbar = ({ type = "user" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 right-0 z-50 ">
      
      <div className={`flex justify-between items-center py-2 px-4  lg:px-12 rounded 
        ${type === "user" ? "bg-white text-[#166534] border-b border-[#166534]" : ""}`}>

        <Image 
        src='/images/logo2.png'
        alt="logo"
        width={100}
        height={100}
        className=" w-20 h-auto md:w-25 lg:w-30 "
        />
       

        {/* Desktop Links */}
        <div className="space-x-6 lg:space-x-10 text-2xl font-bold hidden md:flex items-center">
          <Link href="/" className="hover:text-red-700">Home</Link>
          <Link href="#services" className="md:hidden lg:block hover:text-red-700">Services</Link>
          <Link href="#about" className="md:hidden lg:block hover:text-red-700">About US</Link>
          <Link href="/contact" className="hover:text-red-700">Contact</Link>
          <Link href="/track" className="bg-[#166534]  hover:bg-[#18723b] text-white p-2 rounded">
            Track Delivery
          </Link>
        </div>

        {/* Mobile Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`block md:hidden ${
            type === "user" ? "text-[#166534]" : "text-white"
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
        <div className="bg-black/40 fixed inset-0 backdrop-blur-md "
            onClick={() => setIsOpen(false)}></div>
        <div className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg z-70 flex flex-col p-6 space-y-14 text-xl text-[#166534] uppercase font-bold">
           <button 
              onClick={() => setIsOpen(false)} 
              className="self-end text-[#166534]"
            >
              <X size={28} />
            </button>
          
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-red-700">Home</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-red-700">Services</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-red-700">About US</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-red-700">Contact</Link>
          
          <Link 
            href="/track" 
            onClick={() => setIsOpen(false)}
            className="bg-[#166534] hover:bg-[#1a7e40] text-white p-2 rounded text-center"
          >
            Track Delivery
          </Link>
        </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;