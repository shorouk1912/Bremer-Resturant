// app/components/Hero.jsx
export default function page() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center text-white"
      style={{
        backgroundImage: "url('/Images/hero-section.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10 md:flex md:items-center">
        <div className="md:w-full text-center mt-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-['Playfair Display'] ">
            Bremer Restaurant
          </h1>
          <p className="mb-6 text-lg md:text-xl font-['Poppins']">
            The best pasta, pizza, Chinese & Indian dishes in Mansoura</p>
          <button className="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-['Poppins'] cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
