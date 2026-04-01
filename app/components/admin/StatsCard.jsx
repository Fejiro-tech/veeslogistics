import React from 'react'

const StatsCard = ({ label, value, type, onClick }) => {

  const statusColors = {
    total: "bg-white text-gray-600 border border-gray-300",
    pending: "bg-red-100 text-red-500 border border-red-500",
    inTransit: "bg-yellow-100 text-yellow-500 border border-yellow-500",
    delivered: "bg-green-100 text-green-500 border border-green-500",
  }

  return (
    <div
      onClick={onClick}
      className={`${statusColors[type]} rounded-xl py-4 md:py-10 md:px-4 text-center cursor-pointer`}
    >
      <p className='text-base md:text-lg font-bold'>{label}</p>
      <p className='text-3xl font-medium'>{value}</p>
    </div>
  )
}

export default StatsCard