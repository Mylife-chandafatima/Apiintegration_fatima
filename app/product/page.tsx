


"use client";  
import Link from "next/link";  
import { useEffect, useState } from "react";  
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

  if (loading) {  
    return <p className="text-center text-lg font-medium">Loading products...</p>;  
  }  

  // Filter products based on search input  
  const filteredProducts = searchName.trim()  
    ? products.filter(product =>  
        product.title.toLowerCase().includes(searchName.toLowerCase())  
      )  
    : products; 
    
    const handleSearch = () => {
      if (searchName.trim()) {
        router.push(`/search?query=${encodeURIComponent(searchName)}`); // Search page par redirect karega
      }
    };
 

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
            onClick={handleSearch} 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"  
          >  
            Search  
          </button>  
        </div>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-28 justify-center items-center"> 
        
        {filteredProducts.map((product) => (  
          <div key={product._id} className="hover">  
            {product.imageUrl && (  
              <img  
                src={product.imageUrl}  
                alt={product.title}  
                className="w-100 rounded-lg transition-transform duration-300 hover:scale-110"  
              />  
            )}  
            <div className="mt-4">  
              <h3 className="text-xl font-semibold">{product.title}</h3>  
              <Link href={`/product/${product._id}`} passHref className="text-sky-900 hover:text-amber-400">  
                View Details  
              </Link>  
              <p className="text-green-600 font-medium mt-2">  
                Price: ${product.price}  
              </p>  
              <Link href="/cart">  
                <button  
                  onClick={() => addToCart(product)}  
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"  
                >  
                  Add to Cart  
                </button>  
              </Link>  
            </div>  
          </div>  
        ))}  
      </div>  

    </div>

  );  
};  

export default ProductsPage;