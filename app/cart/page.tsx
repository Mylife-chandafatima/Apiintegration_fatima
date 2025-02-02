


"use client";  
import { useState, useEffect } from "react";  
import axios from 'axios';  
import { useRouter } from 'next/navigation'; 
import {client} from "../../sanity/lib/client" 

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
  const [checkoutVisible, setCheckoutVisible] = useState(false);  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [country, setCountry] = useState('');  
  const [address, setAddress] = useState('');  
  const [city, setCity] = useState('');  
  const [contact, setContact] = useState('');  
  const [message, setMessage] = useState(''); 
  const [showSuccessModal, setShowSuccessModal] = useState(false);
 
  const router = useRouter();  

  // Fetch products from the API  
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
      const updatedCart = existingItem  
        ? prevCart.map((item) =>  
            item._id === product._id  
              ? { ...item, quantity: item.quantity + 1 }  
              : item  
          )  
        : [...prevCart, { ...product, quantity: 1 }];  

      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to local storage  
      return updatedCart;  
    });  
  };  

  // Remove product from cart  
  const removeFromCart = (productId: string) => {  
    setCart((prevCart) => {  
      const updatedCart = prevCart.filter((item) => item._id !== productId);  
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to local storage  
      return updatedCart;  
    });  
  };  

  // Toggle checkout form visibility  
  const handleCheckoutToggle = () => {  
    setCheckoutVisible(!checkoutVisible);  
  };  

 

// const CheckoutForm = () => {  
//     const [name, setName] = useState('');  
//     const [email, setEmail] = useState('');  
//     const [country, setCountry] = useState('');  
//     const [address, setAddress] = useState('');  
//     const [city, setCity] = useState('');  
//     const [contact, setContact] = useState('');  
//     const [message, setMessage] = useState('');  
//     const [cart, setCart] = useState([]);  
//     const [checkoutVisible, setCheckoutVisible] = useState(false);  

//     const handleSubmit = async (e) => {  
//         e.preventDefault();  

//         // Create order data object  
//         const orderData = {  
//             name,  
//             email,  
//             country,  
//             address,  
//             city,  
//             contact,  
//         };  

//         try {  
//             // Send order data to your API  
//             const response = await fetch('/api/orders', {  
//                 method: 'POST',  
//                 headers: {  
//                     'Content-Type': 'application/json',  
//                 },  
//                 body: JSON.stringify(orderData),  // Convert orderData to JSON string  
//             });  

//             if (!response.ok) {  
//                 throw new Error('Failed to place order. Please try again.');  
//             }  

//             // Successful response  
//             setMessage(`Thank you, ${name}! Your order has been placed successfully.`);  
//             setCart([]); // Clear cart after checkout  
//             localStorage.removeItem('cart'); // Clear cart from local storage  

//             // Clear form fields after submission  
//             setName('');  
//             setEmail('');  
//             setCountry('');  
//             setAddress('');  
//             setCity('');  
//             setContact('');  
//             setCheckoutVisible(false); // Hide the checkout form  

//         } catch (error) {  
//             // Handle errors  
//             setMessage(error.message);  
//         }  
//     };  

//     return (  
//         <form onSubmit={handleSubmit}>  
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />  
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />  
//             <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />  
//             <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />  
//             <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />  
//             <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" required />  
//             <button type="submit">Place Order</button>  
//             {message && <p>{message}</p>}  
//         </form>  
//     );  
// };  

// export default CheckoutForm;

  // 
  
  
  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  

    // Create order data to send to Sanity  
    const orderData = {  
        _type: 'order', // Ensure this matches your Sanity schema  
        name,  
        email,  
        country,  
        address,  
        city,  
        contact,
        items: cart.map(item => ({ // Include cart item details in the order  
          productId: item._id,  
          productName: item.title, 
          imageUrl: item.imageUrl, 
          quantity: item.quantity,  
          price: item.price,  
      })),  
      totalPrice: cart.reduce((total, item) => total + item.price * item.quantity, 0), // Calculate total price  
      createdAt: new Date().toISOString(), 
    
    };  

    try {  
        // Save the order to Sanity  
        const response = await client.create(orderData); // Sanity creates the document  
        console.log('Order saved:', response); // Log the response for confirmation  

        // Update the UI based on the successful submission  
        setMessage(`Thank you, ${name}! Your order has been placed successfully.`);  
        setCart([]); // Clear cart after checkout  
        localStorage.removeItem('cart');
        setShowSuccessModal(true);  

         
        setName('');  
        setEmail('');  
        setCountry('');  
        setAddress('');  
        setCity('');  
        setContact('');  
        setCheckoutVisible(false); // Hide checkout form  

    } catch (error) {  
        console.error('Failed to save order:', error);  
        setMessage('There was an error placing your order. Please try again.'); // Show error message  
    }  
};




  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);  

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
            <h3 className="text-xl font-bold">Total: ${total}</h3>  
          </div>  

          <div className="flex justify-center">  
            <button  
              onClick={handleCheckoutToggle}  
              className="mt-4 bg-green-500 p-10 text-white py-2 rounded"  
            >  
              {checkoutVisible ? 'Cancel Checkout' : 'Checkout'}  
            </button>  
          </div>  
        </div>  
      </div>  

      {checkoutVisible && (  
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">  
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">  
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>  
            {message && <div className="mb-4 p-2 bg-green-100 text-green-700 border border-green-300 rounded">{message}</div>}  
            
            <form onSubmit={handleSubmit} className="space-y-4">  
             <h3 className="text-xl font-semibold mb-2">Billing Details</h3>
              <input  
                type="text"  
                placeholder="Name"  
                value={name}  
                onChange={(e) => setName(e.target.value)}  
                required  
                className="border border-gray-300 p-2 w-full rounded"  
              />  
              <input  
                type="email"  
                placeholder="Email"  
                value={email}  
                onChange={(e) => setEmail(e.target.value)}  
                required  
                className="border border-gray-300 p-2 w-full rounded"  
              />  
              <input  
                type="text"  
                placeholder="Country"  
                value={country}  
                onChange={(e) => setCountry(e.target.value)}  
                required  
                className="border border-gray-300 p-2 w-full rounded"  
              />  
              <input  
                type="text"  
                placeholder="Address"  
                value={address}  
                onChange={(e) => setAddress(e.target.value)}  
                required  
                className="border border-gray-300 p-2 w-full rounded"  
              />  
              <input  
                type="text"  
                placeholder="City"  
                value={city}  
                onChange={(e) => setCity(e.target.value)}  
                required  
                className="border border-gray-300 p-2 w-full rounded"  
              />  
              <input  
                type="text"  
                placeholder="Contact Number"  
                value={contact}  
                onChange={(e) => setContact(e.target.value)}  
                required  
                className="border border-gray-300 p-2 w-full rounded"  
              />  
              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded w-full">  
                Place Order  
              </button>  
            </form>  
             
            <button   
              className="mt-4 text-gray-700 underline"   
              onClick={handleCheckoutToggle}  
            >  
              Cancel  
            </button>  
          </div>  
        </div>  

      )} 

      {showSuccessModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Order Placed!</h2>
      <p className="text-lg text-gray-700">Thank you, {name}! Your order has been placed successfully.</p>
      <button
        onClick={() => setShowSuccessModal(false)}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
      >
        OK
      </button>
    </div>
  </div>
      )} 

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