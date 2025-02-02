// import { ShoppingCart } from "lucide-react";
// import { Badge } from "../ui/badges";
// import Image from "next/image";
// import Link from "next/link";
// // import {client} from "../lib/clientsainty";


// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   isNew?: boolean;
//   isSale?: boolean;
// }

// export function AllProduct() {
//   const products: Product[] = [
//     {
//       id: 1,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/whitechair.jpg",
//       isNew: true,
//     },
//     {
//       id: 2,
//       title: "Library Stool Chair",
//       price: 20,
//       originalPrice: 30,
//       image: "/pinksofa.jpg",
//       isSale: true,
//     },
//     {
//       id: 3,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/orangechair.jpg",
//     },
//     {
//       id: 4,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/whitesofa.jpg",
//     },
//     {
//       id: 5,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/tablechair.jpg",
//       isNew: true,
//     },
//     {
//       id: 6,
//       title: "Library Stool Chair",
//       price: 20,
//       originalPrice: 30,
//       image: "/armchair2.jpg",
//       isSale: true,
//     },
//     {
//       id: 7,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/blackchair.jpg",
//     },
//     {
//       id: 8,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/whitechair.jpg",
//     },
//     {
//       id: 9,
//       title: "Library Stool Chair",
//       price: 20,
//       originalPrice: 30,
//       image: "/armchair.jpg",
//       isSale: true,
//     },
//     {
//       id: 10,
//       title: "Library Stool Chair",
//       price: 20,
//       originalPrice: 30,
//       image: "/pinksofa.jpg",
//       isSale: true,
//     },
//     {
//       id: 11,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/orangechair.jpg",
//     },
//     {
//       id: 12,
//       title: "Library Stool Chair",
//       price: 20,
//       image: "/whitesofa.jpg",
//     },
//   ];
//   return (
//     <div className="container mx-auto px-4 py-20">
//       <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight  mb-8">
//         {" "}
//        All Product
//       </h1>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <div key={product.id} className="group relative rounded-lg bg-white">
//             <div className="relative aspect-square overflow-hidden rounded-lg">
//               {product.isNew && (
//                 <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
//                   New
//                 </Badge>
//               )}
//               {product.isSale && (
//                 <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
//                   Sales
//                 </Badge>
//               )}
//               <Link href={"components/productDectription/discription"}>
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   height={400}
//                   width={400}
//                   className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </Link>
//             </div>
//             <div className="mt-4 flex items-center justify-between">
//               <div>
//                 <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
//                 <div className="mt-1 flex items-center gap-2">
//                   <span className="text-lg font-medium text-[#1C1B1F]">
//                     ${product.price}
//                   </span>
//                   {product.originalPrice && (
//                     <span className="text-sm text-gray-500 line-through">
//                       ${product.originalPrice}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]">
//                 <ShoppingCart className="h-5 w-5" />
//                 <span className="sr-only">Add to cart</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// // export const getProductData =async() =>{
// //  const res= await client.fetch(`*[_type==="product"]`)
// //  return res
// // }

// // // export default function New(){
// // //   const data =  getProductData()
// // //   console.log(data);
// // //   return(
// // //     <>
// // //     </>
// // //   )
// // // }




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
<Link href={`/product/${product.id}`}>  
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
          <span className="text-lg font-medium text-[#1C1B1F]">
            ${product.price}
          </span>
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

export default function AllProduct() {
  const products: Product[] = [
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
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/tablechair.jpg",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/armchair2.jpg",
      isSale: true,
    },
    { id: 7, title: "Library Stool Chair", price: 20, image: "/blackchair.jpg" },
    { id: 8, title: "Library Stool Chair", price: 20, image: "/whitechair.jpg" },
        {
             id: 9,
             title: "Library Stool Chair",
             price: 20,
             originalPrice: 30,
             image: "/armchair.jpg",
             isSale: true,
           },
           {
            id: 10,
            title: "Library Stool Chair",
            price: 20,
           originalPrice: 30,
            image: "/pinksofa.jpg",
             isSale: true,
           },
           {
           id: 11,
           title: "Library Stool Chair",
             price: 20,
           image: "/orangechair.jpg",
           },
           {
            id: 12,
            title: "Library Stool Chair",
            price: 20,
           image: "/whitesofa.jpg",
         },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}