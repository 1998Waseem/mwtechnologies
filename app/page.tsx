"use client"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main>
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

