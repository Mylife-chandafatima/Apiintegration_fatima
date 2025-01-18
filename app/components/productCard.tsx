

"use client";

import React from "react";
import {Product} from "@/pages/types"; // Rename import for better clarity.

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
   image,
  onAddToCart,
}
) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-out">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-110"
      />

      {/* Product Name */}
      <h3 className="text-lg font-semibold mb-2">{name}</h3>

      {/* Product Price */}
      <p className="text-lg text-slate-600 mb-4">${price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart({ id, name, image, price })}
        className="bg-blue-500 text-white rounded-md shadow-md text-lg hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
