

// "use client";

// import React from "react";
// import {Product} from "@/pages/types"; // Rename import for better clarity.

// interface ProductCardProps extends Product {
//   onAddToCart: (product: Product) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//     id,
//     name,
//     price,
//    image,
//   onAddToCart,
// }
// ) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-out">
//       {/* Product Image */}
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-56 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-110"
//       />

//       {/* Product Name */}
//       <h3 className="text-lg font-semibold mb-2">{name}</h3>

//       {/* Product Price */}
//       <p className="text-lg text-slate-600 mb-4">${price}</p>

//       {/* Add to Cart Button */}
//       <button
//         onClick={() => onAddToCart({ id, name, image, price })}
//         className="bg-blue-500 text-white rounded-md shadow-md text-lg hover:scale-105 transition-transform duration-300 ease-in-out px-4 py-2"
//       >
//         Add To Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;



import { ShoppingCart } from "lucide-react";  
import { Badge } from "../ui/badges";  
import Image from "next/image";  
import Link from "next/link";  

type Product = {  
  id: number;  
  title: string;  
  price: number;  
  image: string;  
  originalPrice?: number;  
  isNew?: boolean;  
  isSale?: boolean;  
};  

const ProductCard = ({ product }: { product: Product }) => (  
  <div key={product.id} className="group relative rounded-lg bg-white">  
    <div className="relative aspect-square overflow-hidden rounded-lg">  
      {product.isNew && (  
        <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">  
          New  
        </Badge>  
      )}  
      {product.isSale && (  
        <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">  
          Sale  
        </Badge>  
      )}  
      <Link href={`/shop/${product.id}`}>  
        <Image  
          src={product.image}  
          alt={product.title}  
          height={400}  
          width={400}  
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"  
          aria-label={`View details of ${product.title}`}  
        />  
      </Link>  
    </div>  
    <div className="mt-4 flex items-center justify-between">  
      <div>  
        <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>  
        <div className="mt-1 flex items-center gap-2">  
          <span className="text-lg font-medium text-[#1C1B1F]">${product.price}</span>  
          {product.originalPrice && (  
            <span className="text-sm text-gray-500 line-through">  
              ${product.originalPrice}  
            </span>  
          )}  
        </div>  
      </div>  
      <button  
        className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"  
        aria-label={`Add ${product.title} to cart`}  
      >  
        <ShoppingCart className="h-5 w-5" />  
      </button>  
    </div>  
  </div>  
);  

export default ProductCard;
