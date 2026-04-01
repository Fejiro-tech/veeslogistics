"use client"
import React from 'react'
import { TbTruckDelivery, TbCurrentLocation } from "react-icons/tb"
import { FaBoxOpen } from "react-icons/fa"
import { BsLightningChargeFill } from "react-icons/bs"
import { motion } from "framer-motion"

const services = [
  { icon: TbTruckDelivery, title: "Same Day Delivery", desc: "Get your packages delivered the same day." },
  { icon: FaBoxOpen, title: "Parcel Delivery", desc: "Safe and secure parcel handling." },
  { icon: TbCurrentLocation, title: "Real-Time Tracking", desc: "Know where your package is at all times." },
  { icon: BsLightningChargeFill, title: "Express Delivery", desc: "Priority delivery for urgent packages." }
]

const Services = () => {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className='max-w-360 mx-auto py-24' id='services'>
      <h2 className='text-[#0E2470] text-4xl text-center font-bold mb-10 mt-10'>Our Services</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={i}
              variants={card}
              className='backdrop-blur-md bg-[#FFD600]/30 border border-[#FFD600]/40 rounded-2xl shadow-lg text-[#0E2470] text-lg mb-2 p-10 hover:scale-105 transition-transform duration-300 ease-in-out text-center'
            >
              <div className='flex items-center justify-center text-[#1D4DB5] mb-4'>
                <Icon size={34} />
              </div>
              <h3 className='text-xl font-bold mb-4'>{service.title}</h3>
              <p className='text-gray-500'>{service.desc}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Services