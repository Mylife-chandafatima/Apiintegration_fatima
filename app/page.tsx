
import Categories from "./components/categories";
import CompanyLogo from "./components/logo";

import Hero from "./components/herosection";
import Feature from "./components/feature";
import ProductCard from "./components/ourprod";
import ProductCarousel from "./components/ProductCarousel";



export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <Feature/>
      <Categories />
      <ProductCard/>
      <ProductCarousel/>
     
  
      
     

    </>
  );
}


// "use client"

// // app/page.tsx (Next.js 13+ using App Directory)
// import { useRouter } from 'next/router';

// const HomePage = () => {
//   const router = useRouter();

//   const handleGoToCheckout = () => {
//     router.push('/checkout');
//   };

//   return (
//     <div>
//       <h1>Welcome to Our Store</h1>
//       <button onClick={handleGoToCheckout}>Go to Checkout</button>
//     </div>
//   );
// };

// export default HomePage;







