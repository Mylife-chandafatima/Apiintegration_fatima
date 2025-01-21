// // import React from "react";
// // import Image from "next/image";
// // import { CiHeart } from "react-icons/ci";
// // import { RiDeleteBin6Line } from "react-icons/ri";

// // const Cart = () => {
// //   return (
// //     <div className="max-w-[1321px] mx-auto px-4 py-8">
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         <div className="lg:col-span-2">
// //           <h2 className="text-[22px] font-medium pl-3 mb-6">Bag</h2>

// //           <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
// //             <div className="flex items-center space-x-4">
// //               <div className="w-24 h-24 bg-orange-200 rounded">
// //                 <Image src="/02.jpg" alt="." width={150} height={150} />
// //               </div>
// //               <div>
// //                 <h3 className="text-[16px] font-normal text-[#272343] mb-3">
// //                   Library Stool Chair
// //                 </h3>
// //                 <p className="text-sm text-gray-500 mb-1">
// //                   Ashen Slate/Cobalt Bliss
// //                 </p>
// //                 <div className="flex space-x-12">
// //                   <p className="text-[15px] font-normal text-[#757575]">
// //                     Size: L
// //                   </p>
// //                   <p className="text-[15px] font-normal text-[#757575]">
// //                     Quantity: 1
// //                   </p>
// //                 </div>
// //                 <div className="flex gap-3 mt-3">
// //                   <CiHeart />
// //                   <RiDeleteBin6Line />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex gap-3">
// //               <p className="text-[16px] font-normal text-[#111111]">MRP: </p>
// //               <p className="text-[16px] font-normal text-[#111111]">$99</p>
// //             </div>
// //           </div>

// //           <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
// //             <div className="flex items-center space-x-4">
// //               <div className="w-24 h-24 bg-gray-300 rounded">
// //                 <Image src="/02.jpg" alt="." width={150} height={150} />
// //               </div>
// //               <div>
// //                 <h3 className="text-[16px] font-normal text-[#272343] mb-3">
// //                   Library Stool Chair
// //                 </h3>
// //                 <p className="text-[15px] font-normal text-[#757575] mb-1">
// //                   Ashen Slate/Cobalt Bliss
// //                 </p>
// //                 <div className="flex space-x-12">
// //                   <p className="text-[15px] font-normal text-[#757575]">
// //                     Size: L
// //                   </p>
// //                   <p className="text-[15px] font-normal text-[#757575]">
// //                     Quantity: 1
// //                   </p>
// //                 </div>
// //                 <div className="flex gap-3 mt-3">
// //                   <CiHeart />
// //                   <RiDeleteBin6Line />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex gap-3">
// //               <p className="text-[16px] font-normal text-[#111111]">MRP: </p>
// //               <p className="text-[16px] font-normal text-[#111111]">$99</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div>
// //           <h2 className="text-2xl font-bold mb-6">Summary</h2>
// //           <div className="bg-white p-6 rounded-lg shadow-md">
// //             <div className="flex justify-between mb-4">
// //               <p className="text-lg">Subtotal</p>
// //               <p className="text-lg font-semibold">$198.00</p>
// //             </div>
// //             <div className="flex justify-between mb-4">
// //               <p className="text-lg">Estimated Delivery & Handling</p>
// //               <p className="text-lg font-semibold text-green-500">Free</p>
// //             </div>
// //             <hr className="mb-4" />
// //             <div className="flex justify-between mb-6">
// //               <p className="text-xl font-bold">Total</p>
// //               <p className="text-xl font-bold">$198.00</p>
// //             </div>
// //             <button className="w-[334.67px] h-[60px] rounded-[30px] text-white bg-[#029FAE]">
// //               Member Checkout
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;


// // import React from "react";
// // import { useCart } from "../context/CartContext"; // Import the cart context

// // const CartPage = () => {
// //   const { cart, removeFromCart } = useCart();

// //   return (
// //     <div className="cart-page">
// //       <h2>Your Cart</h2>
// //       {cart.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         cart.map((item) => (
// //           <div key={item._id} className="cart-item">
// //             <h3>{item.title}</h3>
// //             <p>Price: ${item.price}</p>
// //             <p>Quantity: {item.quantity}</p>
// //             <button onClick={() => removeFromCart(item._id)}>Remove</button>
// //           </div>
// //         ))
// //       )}
// //       <div className="cart-total">
// //         <h3>
// //           Total: $
// //           {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
// //         </h3>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartPage;




// // //

// "use client";
// import { useState, useEffect } from "react";


// import axios from 'axios';



// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   imageUrl?: string;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// const Cart = () => {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch products from the API (you can replace the URL with your actual API endpoint)
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await fetch("/api/products"); // Replace with your API URL
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, []);

//   // Add product to cart
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item._id === product._id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   // Remove product from cart
//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//   };



//   const handlePlaceOrder = async () => {
//     try {
//       const response = await axios.post('/api/orders', { items: cartItems });
//       if (response.status === 201) {
//         alert('Order placed successfully!');
//       }
//     } catch (error) {
//       console.error('Error placing order:', error);
//       alert('Failed to place order. Try again.');
//     }
//   };
//   return (
//     <div>
//     <div className="border-4 border-red-600 ">
//       <h2 className="text-2xl font-bold mb-4">Cart</h2>

//       <div className="space-y-4">
//         {cart.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           cart.map((item) => (
//             <div key={item._id} className="flex items-center gap-4 border-b pb-4">
//               {item.imageUrl && (
//                 <img
//                   src={item.imageUrl}
//                   alt={item.title}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//               )}
//               <div className="flex-1">
//                 <h3 className="text-lg font-medium">{item.title}</h3>
//                 <p className="text-sm text-gray-600">Price: ${item.price}</p>
//                 <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//               </div>
//               <p className="text-lg font-bold">${item.price * item.quantity}</p>

//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         )}

//         <div className="text-right">
//           <h3 className="text-xl font-bold">
//             Total: $
//             {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
//           </h3>
//         </div>
//       </div>

//       </div>

//       <h3 className="text-2xl font-bold mt-6">Products</h3>

//       <div className="mt-6">
//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           <div className="space-y-4">
//             {products.map((product) => (
//               <div key={product._id} className="flex items-center gap-4 border-b pb-4">
//                 {product.imageUrl && (
//                   <img
//                     src={product.imageUrl}
//                     alt={product.title}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                 )}
//                 <div className="flex-1">
//                   <h3 className="text-lg font-medium">{product.title}</h3>
//                   <p className="text-sm text-gray-600">Price: ${product.price}</p>
//                 </div>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;



"use client";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the API (replace URL with your actual API)
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("/api/products"); // Adjust the endpoint as needed
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };


  const router = useRouter();
  const handleOrder = () => {
    alert('Order Placed');
    router.push('/track-order'); // Redirect to tracking page
  };
  return (
    <div>
    <div className="border-4 border-red-600">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      <div className="space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="flex items-center gap-4 border-b pb-4">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>

              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <div className="text-right">
          <h3 className="text-xl font-bold">
            Total: $
            {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </h3>
        </div>
<div className=" flex justify-center">
        <button
          onClick={handleOrder}
          className="mt-4  bg-green-500 p-10 text-white py-2 rounded"
        >
          Place Order
        </button>
        </div>
      </div>
      </div>
      <div>

      <h3 className="text-2xl font-bold mt-6">Products</h3>

      <div className="mt-6">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product._id} className="flex items-center gap-4 border-b pb-4">
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <p className="text-sm text-gray-600">Price: ${product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Cart;
