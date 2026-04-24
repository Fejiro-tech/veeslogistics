import React from 'react'

const stats = [
  {
    number: "200+",
    desc: "Deliveries"
  },
  {
   
    number: "20+",
    desc: "Areas Covered"
  },
  {
    
    number: "24/7",
    desc: "Support"
  },
  {
    number: "95%",
    desc: "Success Rate"
  }
]

const Stats = () => {
  return (
    <section className=" w-full max-w-3xl  md:mb-0">
      <div className="grid grid-cols-4  bg-[#166534]  rounded-2xl overflow-hidden ">
        {stats.map((stat, i) => (
          <div key={i} className="text-white p-2 md:p- text-center border-r border-[#9ca6bb]">
          <span className="font-bold text-lg md:text-xl lg:text-2xl">{stat.number}</span>
          <p className="text-[10px] md:text-base">{stat.desc}</p>
        </div>

        ))}

      </div>
    </section>
  )
}

export default Stats