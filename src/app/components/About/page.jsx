// app/components/About
import Image from "next/image";

export default function page() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-7 items-center">
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/about-us.webp"
            alt="About Bremer Restaurant"
            width={400}
            height={500}
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair Display']  text-red-600">
            About Bremer
          </h2>
          <p className="text-lg leading-relaxed font-['Poppins'] mb-6">
            At Bremer, we bring you authentic flavors of Italian pasta, delicious
            pizzas, and a touch of Chinese & Indian dishes. Located in the heart
            of Mansoura, our restaurant offers a cozy atmosphere and mouthwatering
            desserts for every occasion.
          </p>
          <button className="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-['Poppins'] cursor-pointer">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
