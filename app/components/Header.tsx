'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.jpg"
              alt="Multiservizi Privati Logo"
              className="h-12 w-auto"
            />
            <span className="text-lg font-bold text-gray-900 hidden sm:inline">
              Multiservizi
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/servizi" className="text-gray-700 hover:text-green-600 transition-colors">
              Servizi
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
              Blog
            </Link>
            <Link href="/chi-siamo" className="text-gray-700 hover:text-green-600 transition-colors">
              Chi Siamo
            </Link>
            <Link href="/contatti" className="text-gray-700 hover:text-green-600 transition-colors">
              Contatti
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+393464311027"
              className="btn-primary"
            >
              Chiama Ora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link href="/servizi" className="block text-gray-700 hover:text-green-600">
              Servizi
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-green-600">
              Blog
            </Link>
            <Link href="/chi-siamo" className="block text-gray-700 hover:text-green-600">
              Chi Siamo
            </Link>
            <Link href="/contatti" className="block text-gray-700 hover:text-green-600">
              Contatti
            </Link>
            <a
              href="tel:+393464311027"
              className="btn-primary block text-center"
            >
              Chiama Ora
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

