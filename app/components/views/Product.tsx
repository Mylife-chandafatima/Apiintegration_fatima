

"use client";  
import { useState, useEffect } from "react";  


import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';   
import {client} from "../../../sanity/lib/client"
import Link from "next/link"





interface Product {  
  _id: string;  
  title: string;  
  price: number;  
  imageUrl?: string;  
}  
const Products: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);  
    const [loading, setLoading] = useState(true);



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
  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
      <p>Here you can view, add, edit, and delete products.</p>


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
                    
                </div>  
              ))}  
            </div>  
          )}  
        </div>  
      </div> 
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600">
        <Link href="http://localhost:3000/studio/structure/products">
        Add Product
        </Link>
      </button>
    </div>
  );
};

export default Products;
