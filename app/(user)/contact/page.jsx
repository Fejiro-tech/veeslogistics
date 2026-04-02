'use client'
import React, { useState } from 'react'
import Contact from '../../components/landing/Contact'
import toast from 'react-hot-toast'

const page = () => {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setLoading(true)

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully");

        setSubmitted(true)

        setFormData({
          name: "",
          email: "",
          message: "",
        });

      } else {
       toast.error(data.error || "Something went wrong")
      }
      
    } catch (error) {
      console.error(error);
      alert("Network error");
    }

    setLoading(false)

  }
  
  return (
    <div className='py-10 md:py-16 px-4'>
        <Contact 
          formData={formData}
          setFormData={setFormData}
          submitted={submitted}
          handleSubmit={handleSubmit}
          loading={loading}
        />
    </div>
  )
}

export default page