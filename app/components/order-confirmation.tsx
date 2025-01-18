// pages/checkout.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CheckoutPage = () => {
  const router = useRouter();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });
  const [shippingRates, setShippingRates] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // Fetch shipping rates from the API
  const handleFetchShippingRates = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/shipping', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shippingInfo),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch shipping rates');
      }

      const data = await response.json();
      setShippingRates(data);
    } catch (error) {
      console.error('Error fetching shipping rates:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle order placement
  const handleSubmit = () => {
    // After placing the order, navigate to the Order Confirmation page
    router.push('/order-confirmation');
  };

  return (
    <div>
      <h1 className="text-3xl text-center my-4">Checkout</h1>
      <div>
        <input
          type="text"
          name="name"
          value={shippingInfo.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="block w-full p-2 mb-4 border"
        />
        <input
          type="text"
          name="address"
          value={shippingInfo.address}
          onChange={handleChange}
          placeholder="Address"
          className="block w-full p-2 mb-4 border"
        />
        <input
          type="text"
          name="city"
          value={shippingInfo.city}
          onChange={handleChange}
          placeholder="City"
          className="block w-full p-2 mb-4 border"
        />
        <input
          type="text"
          name="zip"
          value={shippingInfo.zip}
          onChange={handleChange}
          placeholder="Zip Code"
          className="block w-full p-2 mb-4 border"
        />

        <button
          onClick={handleFetchShippingRates}
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Shipping Rates'}
        </button>

        {shippingRates.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl">Shipping Rates:</h2>
            <ul>
              {shippingRates.map((rate: any) => (
                <li key={rate.id}>
                  {rate.service} - {rate.rate}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
