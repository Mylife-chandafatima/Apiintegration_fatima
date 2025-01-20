




"use client";
import Link from "next/link";
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
  const [searchName, setSearchName] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from the API
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Set filteredProducts to all products initially
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
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };
  
  const searchProductByName = () => {
    if (!searchName) {
      setFilteredProducts(products); // Reset to all products if search is empty
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchName.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  if (loading)
    return <p className="text-center text-lg font-medium">Loading products...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>

      {/* Search Product by Name */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Search Product by Name</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Enter Product Name"
            className="border rounded px-4 py-2 flex-1"
          />
          <button
            onClick={searchProductByName}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Display Filtered Products */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-110" 
              />
            )}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-green-600 font-medium mt-2">
                Price: ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
              />
            )}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
             
              <Link href=  {`/product/${product._id}`} passHref className="text-sky-900 hover:text-amber-400 hover:scale-50">
                View Details
                  </Link>
              <p className="text-green-600 font-medium mt-2">
                Price: ${product.price}
              </p>
       
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-10 border-2 border-red-600 pt-6">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 border-b pb-4"
              >
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
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-lg font-bold">
                  ${item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right">
              <h3 className="text-xl font-bold">
                Total: $
                {cart
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
