import React from 'react'
import Image from "next/image";
export default function page() {
  return (
    <>
    <section id="contact" className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10  text-red-700">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">Mansoura Branch</h3>
            <p className="text-gray-600">
              Address:
              <a
                href="https://www.google.com/maps/place/%D8%B4%D8%A7%D8%B1%D8%B9+%D8%AC%D9%8A%D9%87%D8%A7%D9%86%D8%8C+%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline hover:text-red-800 transition"
              >
                Jehan Street
              </a>
            </p>
            <p className="text-gray-800 mt-2 font-medium">Phone Number :19113 </p>
            <form action="" className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Image */}
          <div className="flex justify-center">
            <Image
              src="/images-bremer-temp/welcome.jfif"
              alt="contact-image"
              width={350}
              height={250}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
</section>
    </>
  )
}
