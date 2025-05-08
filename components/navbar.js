"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-[#13133F] py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
  <img
    src="/images/about/logo.svg"
    alt="KTSPL Logo"
    className="w-16 h-16 mr-2" 
  />
</Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-[#E3AA2F] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#E3AA2F] transition-colors">
              About Us
            </Link>
            <Link href="/projects" className="text-white hover:text-[#E3AA2F] transition-colors">
              Key Projects
            </Link>
            <Link href="/services" className="text-white hover:text-[#E3AA2F] transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-white hover:text-[#E3AA2F] transition-colors">
              Products
            </Link>
            <Link href="/testimonials" className="text-white hover:text-[#E3AA2F] transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-white hover:text-[#E3AA2F] transition-colors">
              Contact Us
            </Link>
          </div>

          <Link
            href="/get-started"
            className="hidden md:block bg-[#E3AA2F] text-black px-4 py-2 rounded-md font-medium hover:bg-[#c99528] transition-colors"
          >
            Get Started
          </Link>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#1A184B] rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                About Us
              </Link>
              <Link href="/projects" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                Key Projects
              </Link>
              <Link href="/services" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                Services
              </Link>
              <Link href="/products" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                Products
              </Link>
              <Link
                href="/testimonials"
                className="text-white hover:text-[#E3AA2F] transition-colors"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
              <Link href="/contact" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                Contact Us
              </Link>
              <Link
                href="/get-started"
                className="bg-[#E3AA2F] text-black px-4 py-2 rounded-md font-medium hover:bg-[#c99528] transition-colors text-center"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
