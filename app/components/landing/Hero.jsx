"use client"
import React from 'react'
import Image from 'next/image'
import Stats from "./Stats"
import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center bg-white overflow-hidden  pt-16 md:pt-24">

      <Image
        src="/images/waves2.svg"
        alt="background"
        fill
        className="absolute inset-0 object-cover pointer-events-none"
      />

      <div className="flex flex-col-reverse lg:flex-row justify-center w-full items-center lg:max-w-360 lg:mx-auto md:gap-4 pt-18 px-4 lg:px-10 relative z-10">

        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[40%] lg:flex flex-col lg:min-h-145 z-20 relative"
        >

          <div className="absolute -inset-4 bg-black/10 blur-2xl rounded-2xl lg:hidden" />

          <div className="relative flex-1 leading-tight">

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase leading-tight text-nowrap mt-8">
              Vee's <span className='text-[#FFD600]'>logistics</span>
            </h1>

            <p className="text-gray-800 lg:text-gray-300 text-base sm:text-lg max-w-md mt-2 font-medium">
              Delivering trust, one package at a time.
            </p>

            <p className="text-gray-800 lg:text-gray-300 mt-1 text-sm md:text-base mb-6 font-medium">
              From <span className="font-bold">pickup</span> to{" "}
              <span className="font-bold">delivery,</span> stay updated.
            </p>

            <div>
              <Link
                href="/track"
                className="inline-block border-[#166534] border md:bg-white text-sm md:text-base text-green px-6 py-3 rounded-lg mt-12 lg:mt-6 transition font-semibold"
              >
                Track Your Delivery
              </Link>
            </div>

          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 sm:mt-8"
          >
            <Stats />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[60%] flex items-center justify-center relative z-10"
        >

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-30 flex items-center justify-center"
          >

            <div className="relative w-[300px] sm:w-[340px] md:w-[420px] lg:w-[720px] aspect-square">

              <div className="absolute inset-0 rounded-full bg-white" />
              <Image
                src="/images/rider.png"
                alt="delivery man"
                fill
                sizes="(max-width: 640px) 300px,
                      (max-width: 768px) 340px,
                      (max-width: 1024px) 420px,
                      720px"
                className="object-contain z-20 drop-shadow-[0_0_20px_#166534] animate-float"
                priority
              />

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-[30%] left-[18%] sm:left-[16%]"
              >
                <Image
                  src="/images/pin2.svg"
                  alt="pin"
                  width={22}
                  height={22}
                  className="sm:w-6 lg:w-8"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                className="absolute top-[20%] right-[28%]"
              >
                <Image
                  src="/images/pin.svg"
                  alt="pin"
                  width={18}
                  height={18}
                  className="sm:w-5 lg:w-7"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute top-[48%] right-[10%]"
              >
                <Image
                  src="/images/pin2.svg"
                  alt="pin"
                  width={20}
                  height={20}
                  className="sm:w-6 lg:w-8"
                />
              </motion.div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero