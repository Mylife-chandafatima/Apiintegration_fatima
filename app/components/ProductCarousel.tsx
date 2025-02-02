"use client"

import { useState, useEffect } from "react";

const products = [
  { id: 1, title: "Library Stool Chair", price: 20, image: "/whitechair.jpg" },
  { id: 2, title: "Library Stool Chair", price: 20, originalPrice: 30, image: "/pinksofa.jpg" },
  { id: 3, title: "Library Stool Chair", price: 20, image: "/orangechair.jpg" },
  { id: 4, title: "Library Stool Chair", price: 20, image: "/whitesofa.jpg" },
  { id: 5, title: "Library Stool Chair", price: 20, image: "/tablechair.jpg" },
  { id: 6, title: "Library Stool Chair", price: 20, originalPrice: 30, image: "/armchair2.jpg" },
  { id: 7, title: "Library Stool Chair", price: 20, image: "/blackchair.jpg" },
  { id: 8, title: "Library Stool Chair", price: 20, image: "/whitechair.jpg" },
  { id: 9, title: "Library Stool Chair", price: 20, originalPrice: 30, image: "/armchair.jpg" },
  { id: 10, title: "Library Stool Chair", price: 20, originalPrice: 30, image: "/pinksofa.jpg" },
  { id: 11, title: "Library Stool Chair", price: 20, image: "/orangechair.jpg" },
  { id: 12, title: "Library Stool Chair", price: 20, image: "/whitesofa.jpg" },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % products.length); // Move four steps every 3 seconds
    }, 2000); // 3-second interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [products.length]);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % products.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + products.length) % products.length); // To ensure we don't go negative
  };

  return (
    <div className="relative py-10 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
        <p className="text-lg text-gray-600">Browse through our top picks</p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden justify-center">
          <div className=" grid  lg:grid-cols-4 sm:grid-cols-1 gap-10 ">
            {products.slice(currentIndex, currentIndex + 4).map((product) => (
              <div key={product.id} className=" p-4">
                <div className="border rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <p className="text-xl font-bold">{`$${product.price}`}</p>
                    {/* {product.originalPrice && (
                      <p className="line-through text-gray-500">{`$${product.originalPrice}`}</p>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
