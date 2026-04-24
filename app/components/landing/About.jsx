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
      <motion.h1 variants={section} className="text-3xl md:text-4xl font-bold text-[#166534] mb-8 text-center mt-8">
        About Vee's Logistics
      </motion.h1>

      <motion.div variants={section} className="flex flex-col lg:flex-row items-center gap-12 mt-12">
        {/* Image */}
        <div className="lg:w-1/2 w-full relative h-120 lg:h-150 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/rider.png"
            alt="Swift Logistics"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 w-full">

          <p className="text-gray-800 text-base lg:text-lg mb-4 leading-relaxed">
            <span className="font-semibold text-[#166534]">Vee's Logistics</span> was built with one simple idea — delivery in Warri should be fast, predictable, and stress-free. We exist to remove the uncertainty that comes with sending packages.
          </p>

          <p className="text-gray-800 text-base lg:text-lg mb-4 leading-relaxed">
            From the moment a parcel is picked up to the moment it arrives, we focus on control, visibility, and reliability. Every delivery is tracked and handled by a team that understands the value of time and trust.
          </p>

          <p className="text-gray-800 text-base lg:text-lg mb-4 leading-relaxed">
            We've supported over <span className="font-bold">200+</span> successful deliveries across Delta State, helping individuals and businesses move faster with confidence.
          </p>

          <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
            Whether it's same-day delivery or urgent express dispatch, we make sure your package gets where it needs to be — without delays, confusion, or stress.
          </p>

        </div>
      </motion.div>
    </motion.div>
  )
}

export default About