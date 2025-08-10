"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Gamepad2 } from "lucide-react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-6xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <Link
            href="/"
            className="flex items-center space-x-2 text-white font-bold text-xl hover:text-violet-300 transition-colors"
          >
            <Gamepad2 className="w-6 h-6" />
            <span>NONGKI</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">
              About Us
            </Link>
            <Link href="#events" className="text-gray-300 hover:text-white transition-colors font-medium">
              Events
            </Link>
            <Link
              href="#join"
              className="px-6 py-2 bg-violet-600/80 hover:bg-violet-600 text-white rounded-full transition-all duration-200 font-medium backdrop-blur-sm border border-violet-500/30"
            >
              Join Discord
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            <Link href="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              <Gamepad2 className="w-6 h-6" />
              <span>NONGKI</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="mt-2 p-2 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <div className="flex flex-col space-y-1">
                <Link
                  href="#about"
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#events"
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="#join"
                  className="mx-2 mt-2 px-4 py-3 bg-violet-600/80 hover:bg-violet-600 text-white rounded-xl transition-all duration-200 font-medium text-center backdrop-blur-sm border border-violet-500/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Discord
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
