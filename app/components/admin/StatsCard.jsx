import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

const StatsCard = ({ label, value, type, onClick }) => {

  const statusColors = {
    total: "bg-white text-gray-600 border border-gray-300",
    pending: "bg-red-100 text-red-500 border border-red-500",
    inTransit: "bg-yellow-100 text-yellow-500 border border-yellow-500",
    delivered: "bg-green-100 text-green-500 border border-green-500",
  }

  // Motion value for number animation
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 1.2 })
    return controls.stop
  }, [value, motionValue])

  return (
    <motion.div
      onClick={onClick}
      className={`${statusColors[type]} rounded-xl py-4 md:py-10 md:px-4 text-center cursor-pointer relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow / gradient border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
       
      />
      
      <p className='text-base md:text-lg font-bold relative z-10'>{label}</p>
      <motion.p className='text-xl md:text-3xl font-medium relative z-10'>
        {rounded}
      </motion.p>
    </motion.div>
  )
}

export default StatsCard