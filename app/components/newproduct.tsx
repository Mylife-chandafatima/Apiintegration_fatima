"use client";

import{useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import{Product } from "@/pages/types";
import ProductCard from "./productCard";

import React from 'react'

const newproduct = () => {
  const[products,setProducts]=useState<Product[]>([]);
 const[cart,setCart]= useState<Product[]>([]);
 const [showCheckout,setshowCheckout] =useState(false);
 const [IsCheckout ,setIsCheckout] = useState(false);
 const router= useRouter();
 useEffect(() =>{
  async function  fetchProducts(){

    const response = await fetch("/api/products");
    const data =await response.json();
    setProducts(data);

  }

  fetchProducts();
  const savedCart =localStorage.getItem("cart");
    if(savedCart){
      setCart(JSON.parse(savedCart));
    }
  },[]);

const addToCart = 
(products:Product)=>{
  setCart((prevCart)=>{
   const updatedCart= [...prevCart,products];
  localStorage.setItem("cart", JSON.stringify(updatedCart))
  ;
  return updatedCart;
});
const toggleCart =()=>{
  setshowCheckout(!toggleCart)
};
const goToCart =()=>{
  setIsCheckout(true)}
;
const clearCart=()=>{
  setCart([]);
    localStorage.removeItem("cart");

}

  

}


 
  return (
    <div>newproduct</div>
  )
}

export default newproduct