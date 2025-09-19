// app/components/Navbar
'use client';
import { useState } from 'react';
import Image from "next/image";
export default function page() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-2 fixed w-full z-50 cursor-pointer">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/images/logo.ico" alt='logo' width={50} height={60}/>
        <div className="hidden md:flex space-x-6 ">
          <a href="#hero" className=" text-red-600">Home</a>
          <a href="#menu" className="hover:text-red-600">Menu</a>
          <a href="#about" className="hover:text-red-600">About Us</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
      {open && (
        <div className="flex flex-col mt-3 space-y-2 md:hidden">
          <a href="#hero" className="hover:text-red-600">Home</a>
          <a href="#menu" className="hover:text-red-600">Menu</a>
          <a href="#about" className="hover:text-red-600">About Us</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </div>
      )}
    </nav>
  );
}
