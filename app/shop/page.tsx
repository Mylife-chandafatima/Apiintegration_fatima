import Image from "next/image";

export default function ProductDetails() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/pinksofa.jpg" // Replace with your actual image URL
          alt="Library Stool Chair"
          width={675}
          height={607}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Library Stool Chair
        </h1>
        <p className="text-xl font-medium text-teal-500 mb-4">$20.00 USD</p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
          adipiscing.
        </p>
        <button className="flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18M3 3h18M3 3h18M3 3h18m0 0l-2 13H5L3 3m5 3v4m4-4v4m4-4v4"
            />
          </svg>
          Add To Cart
        </button>
      </div>
    </section>
  );
}
