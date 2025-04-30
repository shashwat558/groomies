import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-pink-50 to-pink-100/50 py-12">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-pink-500 rounded-full opacity-20 animate-pulse" />
                  
                </div>
                <div className="relative ">
            <Image src="/Groomies.jpg" alt="logo" width={150} height={100} className="object-contain" />
          </div>
              </div>
              <p className="text-gray-600">
                Professional pet grooming services in Chicago. Providing the best care for your furry friends since
                2013.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-pink-700 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-pink-700 mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Full Grooming
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Bath & Brush
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Nail Trimming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-pink-700 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">123 Woof Street, Chicago, IL 60601</li>
                <li className="text-gray-600">(312) 555-PETS</li>
                <li className="text-gray-600">woof@groomies.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-pink-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Groomies. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-pink-500 transition-colors" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer