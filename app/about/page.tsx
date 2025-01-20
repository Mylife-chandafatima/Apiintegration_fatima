import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* About Header Section with lighter blue */}
      <section className="bg-blue-200 text-black py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Comforty</h1>
          <p className="text-xl mt-4">Crafting Comfort for Every Home</p>
        </div>
      </section>

      {/* About Details Section with images */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Mission */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-600">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-700">
              At <span className="font-semibold text-blue-600">Comforty</span>, our mission is to provide every individual with the highest quality comfort products that help them unwind and rejuvenate. From premium mattresses to ergonomic furniture, we aim to create spaces where comfort and style go hand in hand.
            </p>
          </div>
          
          {/* Right Section - Story */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-600">Our Story</h2>
            <p className="mt-4 text-lg text-gray-700">
              Comforty was founded with a simple vision: to redefine comfort in every aspect of life. Starting with a single line of luxury mattresses, we've expanded our product range to include everything you need to create a serene, comfortable environment in your home. Our products are crafted to elevate your well-being and provide unmatched relaxation.
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <img 
            src="blackchair.jpg" 
            alt="Comforty Products" 
            className="w-full md:w-72 h-96 rounded-lg shadow-lg"
          />
          <img 
            src="orangechair.jpg" 
            alt="Comforty Products" 
            className="w-full md:w-72 h-96 rounded-lg shadow-lg"
          />
          <img 
            src="armchair.jpg" 
            alt="Comforty Products" 
            className="w-full md:w-72 h-96 rounded-lg shadow-lg"
          />
          <img 
            src="tablechair.jpg" 
            alt="Comforty Products" 
            className="w-full md:w-72 h-96 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-600">Our Core Values</h2>
          <p className="text-lg mt-4 text-gray-700">
            We believe comfort goes beyond just a product. It’s about the experience we create. Our core values guide everything we do:
          </p>

          <div className="mt-8 grid grid-cols-1  gap-8">
            {/* Value 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600">Quality</h3>
              <p className="mt-2 text-gray-700">We provide premium materials and craftsmanship in every product to ensure maximum comfort and durability.</p>
            </div>

            {/* Value 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600">Innovation</h3>
              <p className="mt-2 text-gray-700">Our design team continuously innovates to bring cutting-edge comfort solutions that cater to modern needs.</p>
            </div>

            {/* Value 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600">Customer Care</h3>
              <p className="mt-2 text-gray-700">We are committed to providing excellent customer service, ensuring that your experience with Comforty is smooth and enjoyable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-200 text-black py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Experience Ultimate Comfort</h2>
          <p className="text-lg mt-4">Explore our exclusive range of comfort products and create your sanctuary of relaxation today.</p>
          <div className="mt-8">
            <a href="/shop" className="inline-block text-white bg-yellow-400 hover:bg-yellow-500 py-3 px-6 rounded-md">
              Shop Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;


// import React from 'react';

// const About = () => {
//   return (
//     <div className="bg-gray-50">

//       {/* About Header Section with lighter blue */}
//       <section className="bg-blue-200 text-black py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold">About Comforty</h1>
//           <p className="text-xl mt-4">Crafting Comfort for Every Home</p>
//         </div>
//       </section>

//       {/* About Details Section with images */}
//       <section className="container mx-auto py-12 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left Section - Mission with image */}
//           <div className="text-center md:text-left">
//             <h2 className="text-3xl font-semibold text-blue-600">Our Mission</h2>
//             <p className="mt-4 text-lg text-gray-700">
//               At <span className="font-semibold text-blue-600">Comforty</span>, our mission is to provide every individual with the highest quality comfort products that help them unwind and rejuvenate. From premium mattresses to ergonomic furniture, we aim to create spaces where comfort and style go hand in hand.
//             </p>
//           </div>
          
//           {/* Right Section - Story with image */}
//           <div className="text-center md:text-left">
//             <h2 className="text-3xl font-semibold text-blue-600">Our Story</h2>
//             <p className="mt-4 text-lg text-gray-700">
//               Comforty was founded with a simple vision: to redefine comfort in every aspect of life. Starting with a single line of luxury mattresses, we've expanded our product range to include everything you need to create a serene, comfortable environment in your home. Our products are crafted to elevate your well-being and provide unmatched relaxation.
//             </p>
//           </div>
//         </div>
//         {/* Example Image for the Story Section */}
//         <div className="mt-8 flex gap-6">
//           <img 
//             src="blackchair.jpg" 
//             alt="Comforty Products" 
//             className="w-70 h-96 rounded-lg shadow-lg"
//           />
//            <img 
//             src="orangechair.jpg" 
//             alt="Comforty Products" 
//             className="w-50 h-96 rounded-lg shadow-lg"
//           />
//             <img 
//             src="armchair.jpg" 
//             alt="Comforty Products" 
//             className="w-70 h-96 rounded-lg shadow-lg"
//           />
//             <img 
//             src="tablechair.jpg" 
//             alt="Comforty Products" 
//             className="w-70 h-96 rounded-lg shadow-lg"
//           />
//         </div>
//       </section>

//       {/* Core Values Section with images */}
//       <section className="bg-gray-100 py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-semibold text-blue-600">Our Core Values</h2>
//           <p className="text-lg mt-4 text-gray-700">
//             We believe comfort goes beyond just a product. It’s about the experience we create. Our core values guide everything we do:
//           </p>

//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {/* Value 1 */}
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-blue-600">Quality</h3>
//               <p className="mt-2 text-gray-700">We provide premium materials and craftsmanship in every product to ensure maximum comfort and durability.</p>
//             </div>

//             {/* Value 2 */}
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-blue-600">Innovation</h3>
//               <p className="mt-2 text-gray-700">Our design team continuously innovates to bring cutting-edge comfort solutions that cater to modern needs.</p>
//             </div>

//             {/* Value 3 */}
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-blue-600">Customer Care</h3>
//               <p className="mt-2 text-gray-700">We are committed to providing excellent customer service, ensuring that your experience with Comforty is smooth and enjoyable.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section with lighter blue */}
//       <section className="bg-blue-200 text-black py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-semibold">Experience Ultimate Comfort</h2>
//           <p className="text-lg mt-4">Explore our exclusive range of comfort products and create your sanctuary of relaxation today.</p>
//           <div className="mt-8">
//             <a href="/shop" className="inline-block text-white bg-yellow-400 hover:bg-yellow-500 py-3 px-6 rounded-md">
//               Shop Now
//             </a>
//           </div>
//         </div>
//       </section>

  

//     </div>
//   );
// };

// export default About;
