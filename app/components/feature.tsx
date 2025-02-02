import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

interface Category {
  id: number;
  title: string;
  price: number;
  originalPrice?: number; // Optional property for sales
  image: string;
  isNew?: boolean; // Optional property for new items
  isSale?: boolean; // Optional property for sale items
}

export default function Features() {
  const features: Category[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/whitechair.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/pinksofa.jpg",
      isSale: true,
    },
    { id: 3, title: "Library Stool Chair", price: 20, image: "/orangechair.jpg" },
    { id: 4, title: "Library Stool Chair", price: 20, image: "/whitesofa.jpg" },
  ];

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((category) => (
            <Link
              key={category.id} // Use 'id' as the key
              href={"../components/productDectription/discription"}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] w-full">
                <Image
                  src={category.image}
                  alt={category.title} 
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  width={400}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 font-inter text-xl font-medium text-white">
                    {category.title} {/* Display the 'title' */}
                  </h3>
                  {category.isSale && (
                    <p className="font-inter text-sm text-gray-200">
                      Sale Price: ${category.price} (Was ${category.originalPrice})
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



