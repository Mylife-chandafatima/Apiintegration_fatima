// // Use server-side logic directly in the component
// import Image from 'next/image';
// import Link from 'next/link';

// const products = [
//   { id: 1, title: "Library Stool Chair", price: 20, image: "/whitechair.jpg", isNew: true },
//   { id: 2, title: "Pink Sofa", price: 20, originalPrice: 30, image: "/pinksofa.jpg", isSale: true },
//   { id: 3, title: "Orange Chair", price: 20, image: "/orangechair.jpg" },
//   { id: 4, title: "White Sofa", price: 20, image: "/whitesofa.jpg" },
//   { id: 5, title: "Table Chair", price: 20, image: "/tablechair.jpg", isNew: true },
//   {
//     id: 6,
//     title: "Library Stool Chair",
//     price: 20,
//     originalPrice: 30,
//     image: "/armchair2.jpg",
//     isSale: true,
//   },
//   { id: 7, title: "Library Stool Chair", price: 20, image: "/blackchair.jpg" },
//   { id: 8, title: "Library Stool Chair", price: 20, image: "/whitechair.jpg" },
//       {
//            id: 9,
//            title: "Library Stool Chair",
//            price: 20,
//            originalPrice: 30,
//            image: "/armchair.jpg",
//            isSale: true,
//          },
//          {
//           id: 10,
//           title: "Library Stool Chair",
//           price: 20,
//          originalPrice: 30,
//           image: "/pinksofa.jpg",
//            isSale: true,
//          },
//          {
//          id: 11,
//          title: "Library Stool Chair",
//            price: 20,
//          image: "/orangechair.jpg",
//          },
//          {
//           id: 12,
//           title: "Library Stool Chair",
//           price: 20,
//          image: "/whitesofa.jpg",
//        },
// ];

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   originalPrice?: number;
// };

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const productId = Number(params.id); // Extract and convert the id from the URL
//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-20">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <Image
//           src={product.image}
//           alt={product.title}
//           width={600}
//           height={600}
//           className="w-full h-auto rounded-lg"
//         />
//         <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
//         <div className="flex items-center mt-2">
//           <span className="text-lg font-medium text-gray-900">${product.price}</span>
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
//           )}
//         </div>
//         <p className="text-gray-600 mt-2 text-sm">
//           { "This product is carefully crafted to provide comfort and style, perfect for any modern space. Durable and versatile, it's designed to last for years. Upgrade your home with this must-have piece!"}
//         </p>
//         <Link href ="/cart">
//         <button className="mt-4 px-4 py-2 bg-[#00B5A5] text-white rounded-lg hover:bg-[#00A294]">
//           Add to Cart
//         </button>
//         </Link>
//         <div className="mt-6">
//           <Link href="/shop"className="text-blue-600 hover:underline">Back to Products
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: "White Chair",
    price: 20,
    image: "/whitechair.jpg",
    isNew: true,
  },
  {
    id: 2,
    title: "Pink Sofa",
    price: 20,
    originalPrice: 30,
    image: "/pinksofa.jpg",
    isSale: true,
  },
  { id: 3, title: "Orange Chair", price: 20, image: "/orangechair.jpg" },
  { id: 4, title: "White Sofa", price: 20, image: "/whitesofa.jpg" },
  {
    id: 5,
    title: "Desk Chair",
    price: 20,
    image: "/tablechair.jpg",
    isNew: true,
  },
  {
    id: 6,
    title: "Arm Chair",
    price: 20,
    originalPrice: 30,
    image: "/armchair2.jpg",
    isSale: true,
  },
  { id: 7, title: "Black Chair", price: 20, image: "/blackchair.jpg" },
  { id: 8, title: "White Chair", price: 20, image: "/whitechair.jpg" },
      {
           id: 9,
           title: "Wing Chair",
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
         title: "Orange Chair",
           price: 20,
         image: "/orangechair.jpg",
         },
         {
          id: 12,
          title: "Sofa Chair",
          price: 20,
         image: "/whitesofa.jpg",
       },
];

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
};

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = Number(params.id); // Extract and convert the id from the URL
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          {/* Image Section */}
          <div className="flex">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="ml-6 w-2/3">
            <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
            <div className="flex items-center mt-2">
              <span className="text-lg font-medium text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
              )}
            </div>
            <p className="text-gray-600 mt-2 text-sm">
              {"This product is carefully crafted to provide comfort and style, perfect for any modern space. Durable and versatile, it's designed to last for years. Upgrade your home with this must-have piece!"}
            </p>
            <Link href="/cart">
              <button className="mt-4 px-4 py-2 bg-[#00B5A5] text-white rounded-lg hover:bg-[#00A294]">
                Add to Cart
              </button>
            </Link>
            <div className="mt-6">
              <Link href="/shop" className="text-blue-600 hover:underline">
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
