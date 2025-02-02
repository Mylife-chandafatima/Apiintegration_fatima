"use client";

import { useEffect, useState } from "react";

import { client } from "../../sanity/lib/client"; // Make sure this is correctly set up
interface Order {
  _id: string;
  name: string;
  email: string;
  country:string;
  city:string;
  contact:number;
  items: { name: string; price: number; quantity: number }[];
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const query = `*[_type == "order"]{
        _id,
        name,
        email,
        country,
        city,
        contact,
        items[]->{
          name,
          price,
          quantity
        }
      }`;
      const result = await client.fetch(query);
      setOrders(result);
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="border-b py-4">
              <p>
                <strong>Name:</strong> {order.name}
              </p>
              <p>
                <strong>Email:</strong> {order.email}
              </p>
              <p>
                <strong>Country:</strong> {order.country}
              </p>
              <p>
                <strong>City:</strong> {order.city}
              </p>
              <p>
                <strong>Contact:</strong> {order.contact}
              </p>
              <p>
                <strong>Items:</strong>
              </p>
              <ul className="ml-4">
                {(order.items || []).map((item, index) => (
                  <li key={index}>
                    {item?.name} - ${item?.price} x {item?.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}
