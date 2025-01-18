// import axios from 'axios';  

// // Shippo API token  
// const SHIPPO_API_TOKEN = 'YOUR_API_TOKEN';  // Replace with your Shippo API token  

// // API endpoints  
// const SHIPPO_RATE_URL = 'https://api.goshippo.com/shipments/';  
// const SHIPPO_RATES_URL = 'https://api.goshippo.com/shipments/';  

// // Shipment details  
// const shipmentData = {  
//     address_from: {  
//         name: "Dr. Steve Brule",  
//         street1: "123 Main St.",  
//         city: "San Francisco",  
//         state: "CA",  
//         zip: "94105",  
//         country: "US",  
//         phone: "555-555-5555"  
//     },  
//     address_to: {  
//         name: "Josh S.",  
//         street1: "456 Another St.",  
//         city: "New York",  
//         state: "NY",  
//         zip: "10001",  
//         country: "US",  
//         phone: "555-555-5555"  
//     },  
//     parcels: [{  
//         length: 10,  
//         width: 6,  
//         height: 4,  
//         distance_unit: "in",  
//         weight: 2,  
//         mass_unit: "lb"  
//     }],  
// };  

// // Create a shipment function  
// async function createShipment() {  
//     try {  
//         const response = await axios.post(SHIPPO_RATE_URL, shipmentData, {  
//             headers: {  
//                 'Authorization': `ShippoToken ${SHIPPO_API_TOKEN}`,  
//                 'Content-Type': 'application/json'  
//             }  
//         });  

//         const shipment = response.data;  
//         console.log("Shipment created successfully!");  
//         console.log(`Shipment ID: ${shipment.object_id}`);  

//         // Retrieve rates for the shipment  
//         const ratesResponse = await axios.get(`${SHIPPO_RATES_URL}${shipment.object_id}/rate/`, {  
//             headers: {  
//                 'Authorization': `ShippoToken ${SHIPPO_API_TOKEN}`,  
//                 'Content-Type': 'application/json'  
//             }  
//         });  

//         const rates = ratesResponse.data;  
//         console.log("Available Rates:");  
//         rates.rates.forEach((rate: any) => {  
//             console.log(`Carrier: ${rate.carrier} - Cost: $${rate.amount}`);  
//         });  
//     } catch (error) {  
//         console.error("Error:", error.response ? error.response.data : error.message);  
//     }  
// }  

// // Run the function  
// createShipment();