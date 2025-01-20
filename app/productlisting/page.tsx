
"use client"


import { useEffect, useState } from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        // If the product is already in the cart, increase its quantity
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise, add the product to the cart with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  if (loading) return <p className="text-center text-lg font-medium">Loading products...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full  object-cover rounded-t-lg"
              />
            )}
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-green-600 font-medium mt-2">Price: ${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-10 p-6 border-t">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item._id} className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
