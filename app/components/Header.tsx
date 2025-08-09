"use client"

import { useState } from "react"
import Link from "next/link"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white brand-glow">
          <i className="fas fa-gamepad mr-2"></i> NONGKI
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-300 hover:text-violet-400 transition">
            About Us
          </Link>
          <Link href="#events" className="text-gray-300 hover:text-violet-400 transition">
            Events
          </Link>
          <Link href="#join" className="btn-primary">
            Join Discord
          </Link>
        </div>
        <button
          id="mobile-menu-button"
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </nav>
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden bg-gray-900`}>
        <Link
          href="#about"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="#events"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Events
        </Link>
        <Link
          href="#join"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Join Discord
        </Link>
      </div>
    </header>
  )
}

export default Header
