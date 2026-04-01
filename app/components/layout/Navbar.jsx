"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { Menu, X } from "lucide-react";

const Navbar = ({ type = "user" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 right-0 z-50">
      
      <div className={`flex justify-between items-center py-2 px-8  lg:px-12 rounded 
        ${type === "user" ? "bg-white text-[#0E2470] border-b border-b-[#1D4DB5]" : "bg-[#1D4DB5] text-white"}`}>

        {/* Logo */}
        {/* <h1 className={`text-3xl md:text-5xl font-bold 
          ${type === "user" ? "text-[#1D4DB5]" : "text-white"}`}>
          [Logo]
        </h1> */}

        <Image 
        src='/images/SwiftLogo.png'
        alt="logo"
        width={100}
        height={100}
        className=" w-25  h-10 md:w-35 lg:w-40 md:h-15"
        />

        {/* Desktop Links */}
        <div className="space-x-6 lg:space-x-10 text-2xl font-bold hidden md:flex items-center">
          <Link href="/">Home</Link>
          <Link href="#services" className="md:hidden lg:block">Services</Link>
          <Link href="#about" className="md:hidden lg:block">About US</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/track" className="bg-[#0E2470] text-white p-2 rounded">
            Track Delivery
          </Link>
        </div>

        {/* Mobile Button */}
        <button 
  onClick={() => setIsOpen(!isOpen)} 
  className={`block md:hidden ${
    type === "user" ? "text-[#1D4DB5]" : "text-white"
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
        <div className="fixed top-0 right-0 w-64 h-screen bg-white shadow-lg z-70 flex flex-col p-6 space-y-14 text-xl text-[#1D4DB5] uppercase font-bold">
           <button 
              onClick={() => setIsOpen(false)} 
              className="self-end text-[#1D4DB5]"
            >
              <X size={28} />
            </button>
          
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About US</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <Link 
            href="/track" 
            onClick={() => setIsOpen(false)}
            className="bg-[#1D4DB5] text-white p-2 rounded text-center"
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