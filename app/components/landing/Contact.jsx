"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"

const Contact = ({ formData, setFormData, handleSubmit, submitted, loading}) => {
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


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
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.h1 variants={section} className="text-3xl md:text-4xl font-bold text-[#166534] mb-4 text-center">
        Contact Us
      </motion.h1>

      <motion.p variants={section} className="text-gray-700 text-center mb-10 text-sm md:text-base">
        Have questions or need help with a shipment? Fill out the form below and we'll get back to you as soon as possible.
      </motion.p>

      <motion.form variants={section} onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white shadow-lg p-4 rounded-xl">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#166534]"
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#166534]"
        />

        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange}
          required
          rows={5}
          className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#166534]"
        />

        <button 
          type="submit" 
          disabled={loading}
          className="bg-[#166534] text-white py-3 rounded-lg font-bold hover:bg-[#16803f] transition"
        >

          {loading ? <span className="animate-pulse"> "Sending..."</span> : "Send Message"}
        </button>
      </motion.form>
    </motion.div>
  )
}

export default Contact