import Image from "next/image";
import Hero from "../components/landing/Hero"
import Services from "../components/landing/Services"
import Navbar from "../components/layout/Navbar"
import About from "../components/landing/About"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="pt-14 md:pt-24 px-8 ">
        <Services />
      </div>
      <About />
    </div>
  );
}
