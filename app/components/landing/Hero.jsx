"use client"
import React from 'react'
import Image from 'next/image'
import Stats from "./Stats"
import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center bg-gray-50 overflow-hidden px-4 sm:px-6 lg:px-12 pt-16 md:pt-24">

      {/* Background */}
      <Image
        src="/images/waves2.svg"
        alt="background"
        fill
        className="absolute inset-0 object-cover pointer-events-none "
      />

      <div className="flex flex-col-reverse lg:flex-row justify-center w-full items-center lg:max-w-360 lg:mx-auto gap-4 py-24 px-4 lg:px-10 relative z-10">

        {/* Left Side - Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[40%] lg:flex flex-col lg:min-h-145"
        >
          <div className="flex-1 leading-tight">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase leading-tight text-nowrap">
              Vee's <span className='text-[#FFD600]'>logistics</span>
            </h1>

            <p className="lg:text-gray-300 text-base sm:text-lg max-w-md mt-">
              Delivering trust, one package at a time.
            </p>
            <p className="lg:text-gray-300 mt-2 text-sm md:text-base mb-6">
              Trusted by <span className="font-bold">10,000</span>+ customers
            </p>

            <div>
              <Link
                href="/track"
                className="inline-block border-[#166534] border md:bg-white text-sm md:text-base text-green px-6 py-3 rounded-lg mt-12 lg:mt-6  transition font-semibold"
              >
                Track Your Delivery
              </Link>
            </div>

          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 sm:mt-8"
          >
            <Stats />
          </motion.div>
        </motion.div>

        {/* Right Side - Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="sm:w-[60%] md:w-[70%] relative lg:w-[60%] flex items-center justify-center sm:pt-10 mb-10"
        >
          {/* Map Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0"
          >
            <Image  
              src="/images/map.png"
              alt="map"
              fill
              className="object-contain translate-y-[20%] lg:translate-y-[15%] z-0"
              priority
            />
          </motion.div>

          {/* Delivery Man */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className='relativ z-30 flex items-center justify-center'
          >
            <div className='absolute w-52 h-52 md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full ring 2 ring-yellow-400 animate-ping '>

            </div>
            <Image  
              src="/images/deliveryman.png"
              alt="delivery man"
              width={500}
              height={500}
              className="w-82 h-82 md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px]  object-cover z-20 drop-shadow-[0_0_20px_#166534] animate-float"
            />
          </motion.div>

          {/* Floating Pins */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-[35%] left-[5%]"
          >
            <Image src="/images/pin2.svg" alt="pin" width={40} height={40} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
            className="absolute top-[18%] right-[30%]"
          >
            <Image src="/images/pin.svg" alt="pin" width={30} height={30} />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="absolute top-[45%] right-[10%]"
          >
            <Image src="/images/pin2.svg" alt="pin" width={35} height={35} />
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero