"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    fetch("/api/products") // API se products fetch kar rahe hain
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((product: Product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [searchQuery]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Search Results for "{searchQuery}"
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-lg font-medium">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product._id} className="hover">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-100 rounded-lg transition-transform duration-300 hover:scale-110"
                />
              )}
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-green-600 font-medium">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
