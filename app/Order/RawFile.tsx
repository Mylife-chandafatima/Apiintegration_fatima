"use client";
import { useState } from "react";

const CheckoutModal = ({
  isOpen,
  closeModal,
  onSubmit,
}: {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: (formData: any) => void;
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+92",
    address: "",
    city: "",
    zipCode: "",
    state: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shipmentDetails, setShipmentDetails] = useState<any | null>(null);
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<any | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  const countries = [
    { code: "+92", name: "Pakistan", flag: "🇵🇰" },
    { code: "+1", name: "USA", flag: "🇺🇸" },
    { code: "+44", name: "UK", flag: "🇬🇧" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      countryCode: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData].trim()) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
      }
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const userData = { ...formData };
      localStorage.setItem("userData", JSON.stringify(userData));

      await handleCheckout(userData, [{ id: "1", price: 100 }]); // Placeholder cart item
    }
  };

  const handleCheckout = async (userData: any, cartItems: any[]) => {
    const addressFrom = {
      name: "E-commerce Store",
      street1: "123 Store Lane",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      country: "US",
    };

    const addressTo = {
      name: userData.fullName,
      street1: userData.address,
      city: userData.city,
      state: userData.state,
      zip: userData.zipCode,
      country: "US",
    };

    const parcels = [
      {
        length: "10",
        width: "10",
        height: "10",
        distance_unit: "in",
        weight: "5",
        mass_unit: "lb",
      },
    ];

    try {
      const response = await fetch("/api/shippoOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addressFrom,
          addressTo,
          parcels,
          orderId: "ORDER12345",
          totalAmount: cartItems.reduce((total, item) => total + item.price, 0),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setShipmentDetails({
          orderId: data.orderId,
          totalAmount: data.totalAmount,
          eta: data.eta,
          trackingNumber: data.trackingNumber,
        });

        setCheckoutStatus("Order placed successfully!");
      } else {
        setCheckoutStatus("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      setCheckoutStatus("An error occurred. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6">
      {!shipmentDetails ? (
      <div>
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName} // Ensure the value is correctly linked
                onChange={handleChange}
                className="border rounded-lg w-full p-2 text-black"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg w-full p-2"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          {/* Row 2: Phone Number */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="countryCode" className="block font-medium">Country Code</label>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
                className="w-1/4 p-2 border border-gray-300 rounded-l-lg"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="phoneNumber" className="block font-medium">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border rounded-lg w-full p-2"
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>
          </div>

          {/* Row 3: Address */}
          <div>
            <label htmlFor="address" className="block font-medium">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-lg w-full p-2"
              placeholder="Enter your address"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Row 4: State, City, and Zip Code */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="state" className="block font-medium">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="border rounded-lg w-full p-2"
                placeholder="Enter your state"
              />
              {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>
            <div>
              <label htmlFor="city" className="block font-medium">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border rounded-lg w-full p-2"
                placeholder="Enter your city"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
            <div>
              <label htmlFor="zipCode" className="block font-medium">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="border rounded-lg w-full p-2"
                placeholder="Enter your zip code"
              />
              {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
            </div>
          </div>

          <div className="flex justify-end gap-6">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 bg-gray-300 text-white rounded-md hover:bg-gray-400"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-darkPrimary text-white rounded-md hover:bg-navbarColor"
            >
              Submit
            </button>
          </div>
        </form>
    </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Shipment Details</h2>
            <p>Order ID: {shipmentDetails.orderId}</p>
            <p>Total Amount: ${shipmentDetails.totalAmount}</p>
            <p>ETA: {shipmentDetails.eta}</p>
            <p>Tracking Number: {shipmentDetails.trackingNumber}</p>
            <button onClick={closeModal} className="px-6 py-2 bg-gray-300 rounded-md">
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;