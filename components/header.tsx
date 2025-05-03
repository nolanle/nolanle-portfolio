"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Nolan Le
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#home" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Kỹ năng
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="#home" onClick={toggleMenu} className="block hover:text-gray-600 dark:hover:text-gray-300">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="#about" onClick={toggleMenu} className="block hover:text-gray-600 dark:hover:text-gray-300">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  onClick={toggleMenu}
                  className="block hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Dự án
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  onClick={toggleMenu}
                  className="block hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Kỹ năng
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={toggleMenu}
                  className="block hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
