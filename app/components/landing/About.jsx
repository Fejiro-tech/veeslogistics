"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const About = () => {

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  }

  const section = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <motion.div 
    id="about"
      className="max-w-360 mx-auto px-8 md:px-10 lg:px-16 py-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.h1 variants={section} className="text-3xl md:text-4xl font-bold text-[#0E2470] mb-8 text-center mt-8">
        About Swift Logistics
      </motion.h1>

      <motion.div variants={section} className="flex flex-col lg:flex-row items-center gap-12 mt-12">
        {/* Image */}
        <div className="lg:w-1/2 w-full relative h-120  lg:h-150 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/deliveryman.png"
            alt="Swift Logistics"
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 w-full">
          <p className="text-gray-700 text-base lg:text-lg mb-4">
            At <span className="font-bold text-[#1D4DB5]">Swift Logistics</span>, we are committed to providing fast, reliable, and secure delivery services across Nigeria. Our mission is to ensure your packages arrive safely and on time.
          </p>
          <p className="text-gray-700  text-base lg:text-lg mb-4">
            We leverage modern tracking technology and a dedicated team to make sure every delivery is smooth, transparent, and hassle-free. Trusted by over <span className="font-bold">10,000</span> customers, we are your go-to logistics partner.
          </p>
          <p className="text-gray-700  text-base lg:text-lg">
            Whether it's same-day delivery, parcel delivery, or express shipping, <span className="font-bold text-[#1D4DB5]">Swift Logistics</span> ensures your packages are in safe hands.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About