import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

// interface Category {
//   id: number;
//   title: string;
//   price: number;
//   originalPrice?: number; // Optional property for sales
//   image: string;
//   isNew?: boolean; // Optional property for new items
//   isSale?: boolean; // Optional property for sale items
// }

// export default function Features() {
//   const features: Category[] = [
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
//     { id: 3, title: "Library Stool Chair", price: 20, image: "/orangechair.jpg" },
//     { id: 4, title: "Library Stool Chair", price: 20, image: "/whitesofa.jpg" },
//   ];

//   return (
//     <section className="w-full px-4 py-[7rem] md:px-6">
//       <div className="mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Products</h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {features.map((category) => (
//             <Link
//               key={category.id} // Use 'id' as the key
//               href={"../components/productDectription/discription"}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <div className="aspect-[4/3] w-full">
//                 <Image
//                   src={category.image}
//                   alt={category.title} 
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   priority
//                   width={400}
//                   height={300}
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
//                 <div className="absolute bottom-0 p-6">
//                   <h3 className="mb-2 font-inter text-xl font-medium text-white">
//                     {category.title} {/* Display the 'title' */}
//                   </h3>
//                   {category.isSale && (
//                     <p className="font-inter text-sm text-gray-200">
//                       Sale Price: ${category.price} (Was ${category.originalPrice})
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Features() {
return(
<div className="container mx-auto  px-4 py-[7rem] md:px-10">
  <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
  <div className="grid md:grid-cols-4  sm:grid-cols-2 gap-6">
   
    <div >
      <span className="bg-green-500 text-white px-2 py-1 text-sm rounded ">New</span>
      <img src="/whitechair.jpg" alt="Library Stool Chair" className="w-full h-60 object-cover my-2 rounded transition-transform duration-300 hover:scale-105"/>
       
     
      
     <div className="mt-4 flex items-center justify-between">
         <h3 className="text-lg font-medium">Library Stool Chair</h3>
       
    

       <button className="bg-[#00A294] rounded p-3 text-white transition-colors hover:bg-[#00A294] text-2xl py-2"><FaShoppingCart/></button>
      </div>
      <p className="text-lg font-semibold  ">$20</p>
     


       
    </div>
    
    
    <div >
      <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">Sales</span>
      <img src="/pinksofa.jpg" alt="Library Stool Chair" className="w-full h-60 object-cover my-2 rounded  transition-transform duration-150 hover:scale-105"/>
      
     <div className="mt-4 flex items-center justify-between">
         <h3 className="text-lg font-medium">Library Stool Chair</h3>
       
    

       <button className=" bg-gray-400 rounded p-3 text-white transition-colors hover:bg-[#00A294] text-2xl py-2"><FaShoppingCart/></button>
      </div>
      
      <p className="text-lg font-semibold text-gray-700"><span className="line-through text-gray-500">$30</span> $20</p>
    
    </div>
   

    <div>
      
      <img src="/orangechair.jpg" alt="Library Stool Chair" className="w-full h-60 object-cover my-7 rounded  transition-transform duration-300 hover:scale-105"/>
      <div className="mt-4 flex items-center justify-between">
         <h3 className="text-lg font-medium">Library Stool Chair</h3>
       
    

       <button className=" bg-gray-400 rounded p-3 text-white transition-colors hover:bg-[#00A294] text-2xl py-2"><FaShoppingCart/></button>
      </div>
      <p className="text-lg font-semibold text-gray-700">$20</p>
    
    </div>



    <div>
      
      <img src="/whitesofa.jpg" alt="Library Stool Chair" className="w-full h-60 object-cover my-7 rounded  transition-transform duration-300 hover:scale-105"/>
      
     <div className="mt-4 flex items-center justify-between">
         <h3 className="text-lg font-medium">Library Stool Chair</h3>
       
    

       <button className=" bg-gray-400 rounded p-3 text-white transition-colors hover:bg-[#00A294] text-2xl py-2"><FaShoppingCart/></button>
      </div>
    <p className="text-lg font-semibold text-gray-700">$20</p>
      
    </div>
  </div>
</div>
)
};