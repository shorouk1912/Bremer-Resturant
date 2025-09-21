"use client"; 

import React, { useState } from 'react';

export default function page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className=" mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-700">Contact Us</h2>
        <div className=" items-center">
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">Mansoura Branch</h3>
            <p className="text-gray-600">
              Address:{" "}
              <a
                href="https://www.google.com/maps/place/%D8%B4%D8%A7%D8%B1%D8%B9+%D8%AC%D9%8A%D9%87%D8%A7%D9%86%D8%8C+%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 underline hover:text-red-800 transition"
              >
                Jehan Street
              </a>
            </p>
            <p className="text-gray-800 mt-2 font-medium">Phone Number: 19113</p>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name" 
                  placeholder="Your Name"
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
   );
}
