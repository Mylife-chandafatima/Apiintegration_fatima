import React from "react";
import { Poppins } from "next/font/google";
import { FaQuestionCircle } from "react-icons/fa";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const FAQSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-6">
      <h2 className="font-semibold text-3xl text-center text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 space-y-6">
        <div className="flex space-x-4">
          <FaQuestionCircle className="text-[#029FAE] h-[24px] mt-1" />
          <div>
            <h3 className={`${poppins.className} text-xl font-semibold text-gray-800`}>
              What products do you offer?
            </h3>
            <p className="text-gray-600 text-[16px]">
              We offer a wide range of products, including clothing, accessories, and electronics. Visit our product page for more details.
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <FaQuestionCircle className="text-[#029FAE] h-[24px] mt-1" />
          <div>
            <h3 className={`${poppins.className} text-xl font-semibold text-gray-800`}>
              How do I place an order?
            </h3>
            <p className="text-gray-600 text-[16px]">
              You can place an order by adding items to your cart and proceeding to checkout. We accept several payment methods for your convenience.
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <FaQuestionCircle className="text-[#029FAE] h-[24px] mt-1" />
          <div>
            <h3 className={`${poppins.className} text-xl font-semibold text-gray-800`}>
              How can I track my order?
            </h3>
            <p className="text-gray-600 text-[16px]">
              After placing an order, you'll receive an email with a tracking link that will allow you to track your shipment.
            </p>
          </div>
        </div>

        {/* Add more FAQs here */}
      </div>
    </div>
  );
};

export default FAQSection;
