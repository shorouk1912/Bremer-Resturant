"use client";
import Image from "next/image";
import { useState } from "react"; 
import { burgers, desserts, pizzas, sandwiches } from "@/data/menuData";
const menuSections = {
  Burgers: burgers,
  Pizzas: pizzas,
  Sandwiches: sandwiches,
  Desserts: desserts,
};
const categoryNames = Object.keys(menuSections);
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Burgers");
  const activeItems = menuSections[activeCategory];
  return (
    <section id="menu" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 font-['Playfair Display'] text-red-600">
          Our Menu
        </h2>
        <div className="flex justify-center gap-4 md:gap-6 mb-12 flex-wrap">
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 font-['Poppins'] font-semibold rounded-full text-lg transition-colors duration-300 cursor-pointer
                ${activeCategory === category 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-red-600'
                }
                hover:text-red-600 
              `}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activeItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2 font-['Playfair Display']">
                  {item.name}
                </h4>
                <p className="text-gray-600 mb-4 font-['Poppins']">
                  {item.dsc}
                </p>
                <span className="text-red-600 font-bold text-lg">
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
