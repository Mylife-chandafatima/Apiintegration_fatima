// const express = require('express');
// const shippo = require('shippo');
// const { saveOrder } = require('./orderService'); // Function to save order details

// const router = express.Router();

// // Initialize Shippo API with your API key
// const shippoClient = shippo(`ShippoToken shippo_test_ce5b4d777ed4efa27595b2c61e2b033a6cedc305`);

// // Order placement API
// router.post('/orders', async (req, res) => {
//   const { items, shippingAddress, paymentDetails } = req.body;

//   // Calculate total weight of items (you can modify this logic based on item data)
//   const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

//   // Create a Shippo address object
//   const addressTo = {
//     name: shippingAddress.name,
//     street1: shippingAddress.addressLine1,
//     city: shippingAddress.city,
//     state: shippingAddress.state,
//     zip: shippingAddress.zip,
//     country: shippingAddress.country,
//     email: shippingAddress.email,
//   };

//   try {
//     // Get shipping rates from Shippo
//     const rates = await shippoClient.rates.create({
//       address_from: {  // Your store's address (replace with your actual address)
//         name: 'Your Store',
//         street1: '123 Store St.',
//         city: 'City',
//         state: 'State',
//         zip: '12345',
//         country: 'US',
//       },
//       address_to: addressTo,
//       parcels: [{
//         length: 10,     // Length of your package (in inches)
//         width: 5,       // Width of your package (in inches)
//         height: 8,      // Height of your package (in inches)
//         distance_unit: 'in',
//         weight: totalWeight, // Total weight of your package (in pounds)
//         mass_unit: 'lb',
//       }],
//     });

//     // If rates are available, proceed to create the order
//     if (rates && rates.results.length > 0) {
//       // Choose the best shipping rate (you can customize this logic)
//       const bestRate = rates.results[0];

//       // Create a shipping label (if needed)
//       const shipment = await shippoClient.shipments.create({
//         address_from: {  // Your store's address (replace with your actual address)
//           name: 'Your Store',
//           street1: '123 Store St.',
//           city: 'City',
//           state: 'State',
//           zip: '12345',
//           country: 'US',
//         },
//         address_to: addressTo,
//         parcels: [{
//           length: 10,     // Length of your package (in inches)
//           width: 5,       // Width of your package (in inches)
//           height: 8,      // Height of your package (in inches)
//           distance_unit: 'in',
//           weight: totalWeight, // Total weight of your package (in pounds)
//           mass_unit: 'lb',
//         }],
//       });

//       // If the shipment was created successfully, proceed to save the order
//       const newOrder = await saveOrder({
//         items,
//         shippingAddress,
//         paymentDetails,
//         shippingRate: bestRate,
//         shipmentLabel: shipment.label_url,  // URL of the shipping label
//         datePlaced: new Date(),
//         status: 'pending',
//       });

//       res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
//     } else {
//       res.status(400).json({ error: 'No shipping rates available' });
//     }
//   } catch (error) {
//     console.error('Error creating order:', error);
//     res.status(500).json({ error: 'Failed to place order. Please try again later.' });
//   }
// });

// module.exports = router;
