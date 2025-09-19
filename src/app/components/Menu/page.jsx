// app/components/Menu
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "buffalo Pasta",
    description: "Fresh homemade pasta with creamy sauces.",
    price: "$18",
    image: "/images-bremer-temp/buffalo-pasta.webp",
  },
  {
    id: 8,
    name: "chicken Pasta",
    description: "Fresh  pasta with creamy sauces.",
    price: "$15",
    image: "/images-bremer-temp/chicken-pasta.jfif",
  },
  {
    id: 2,
    name: "Classic Pizza",
    description: "Wood-fired pizza with fresh toppings.",
    price: "$19",
    image: "/images-bremer-temp/pizza.jfif",
  },
  {
    id: 4,
    name: "Indian Curry",
    description: "Spicy curry with authentic Indian flavors.",
    price: "$25",
    image: "/images-bremer-temp/indian-food.jfif",
  },
  {
    id: 5,
    name: "appetizers",
    description: "Golden fried rolls stuffed with fresh veggies",
    price: "$10",
    image: "/images-bremer-temp/appetizers.jpg",
  },
  {
    id: 6,
    name: "Sea food",
    description: "Creamy pasta with juicy shrimp & garlic butter sauce.",
    price: "$30",
    image: "/images-bremer-temp/sea-food.jfif",
  },
  {
    id: 7,
    name: "sandwich",
    description: "Grilled chicken breast with lettuce, tomato & mayo",
    price: "$20",
    image: "/images-bremer-temp/sandwich.jfif",
  },
  {
    id: 10,
    name: "Dessert",
    description: "Rich and moist chocolate cake with fudge frosting",
    price: "$28",
    image: "/images-bremer-temp/dessert.jfif",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Playfair Display']  text-red-600">
          Our Menu
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 cursor-pointer">
                <h3 className="text-2xl font-semibold mb-2 font-['Playfair Display']">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 font-['Poppins']">
                  {item.description}
                </p>
                <span className="text-red-600 font-bold text-lg">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
