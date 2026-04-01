"use client"
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = ({ type = "user" }) => {

  if (type === "admin") {
    return (
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p className="text-lg md:text-xl">Admin Panel Footer</p>
      </footer>
    )
  }

  // Motion variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  }

  const section = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const socialIcon = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <motion.footer 
      className="bg-[#0E2470] text-white pt-12 pb-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-360 mx-auto  px-8 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">

        {/* Logo & Description */}
        <motion.div variants={section} className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">Swift <span className="text-[#FFD600]">Logistics</span></h1>
          <p className="text-gray-200 text-sm">
            Delivering trust, one package at a time. Fast, reliable, and secure logistics services you can count on.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" }
            ].map((social, i) => (
              <motion.div
                key={i}
                variants={socialIcon}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white hover:text-[#FFD600] transition cursor-pointer"
              >
                <Link href={social.link}>{social.icon}</Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={section} className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-[#FFD600] transition">Home</Link>
          <Link href="#services" className="hover:text-[#FFD600] transition">Services</Link>
          <Link href="/track" className="hover:text-[#FFD600] transition">Track Delivery</Link>
          <Link href="/contact" className="hover:text-[#FFD600] transition">Contact</Link>
        </motion.div>

        {/* Services */}
        <motion.div variants={section} className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold mb-2">Services</h3>
          <Link href="#" className="hover:text-[#FFD600] transition">Same Day Delivery</Link>
          <Link href="#" className="hover:text-[#FFD600] transition">Parcel Delivery</Link>
          <Link href="#" className="hover:text-[#FFD600] transition">Real-Time Tracking</Link>
          <Link href="#" className="hover:text-[#FFD600] transition">Express Delivery</Link>
        </motion.div>

        {/* Contact */}
        <motion.div variants={section} className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-gray-200 text-sm">123 Logistics Street</p>
          <p className="text-gray-200 text-sm">Lagos, Nigeria</p>
          <p className="text-gray-200 text-sm">Email: info@swiftlogistics.com</p>
          <p className="text-gray-200 text-sm">Phone: +234 123 456 7890</p>
        </motion.div>

      </div>

      <motion.div variants={section} className="border-t border-white/20 mt-8"></motion.div>

      <motion.p variants={section} className="text-center text-gray-200 text-sm mt-4">
        &copy; {new Date().getFullYear()} Swift Logistics. All rights reserved.
      </motion.p>
    </motion.footer>
  )
}

export default Footer