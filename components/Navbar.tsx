import { Cross, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="relative ">
            <Image src="/Groomies.jpg" alt="logo" width={150} height={100} className="object-contain" />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 sm:gap-8 max-sm:hidden">
          {[
            { href: '/', label: 'Home', active: true },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact'}
          ].map(({ href, label, active }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 ${
                active ? 'text-pink-500 after:bg-pink-400 after:w-full' :
                'after:w-0 after:bg-pink-400 hover:after:w-full after:transition-all after:duration-300'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        { <Menu className='xl:hidden lg:hidden md:hidden' onClick={() => setMenuOpen(true)}/>}
        {menuOpen && (
  <div className="z-10 absolute top-[20%] left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-xl shadow-lg w-full transition-all ease-in-out duration-500">
    
    <div className="flex justify-end mb-4">
      <Cross className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
    </div>
    
    <nav className="flex flex-col w-full gap-6 sm:gap-8 text-center">
      {[
        { href: '/', label: 'Home', active: true },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' }
      ].map(({ href, label, active }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 ${
            active
              ? 'text-pink-500 after:bg-pink-400 after:w-full'
              : 'after:w-0 after:bg-pink-400 hover:after:w-full after:transition-all after:duration-300'
          }`}
          onClick={() => setMenuOpen(false)} 
        >
          {label}
        </Link>
      ))}
    </nav>
  </div>
)}
      </div>
    </header>
  )
}

export default Navbar
