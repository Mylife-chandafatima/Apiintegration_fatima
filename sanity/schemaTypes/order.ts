
export default {  
  name: 'order', // Unique identifier for this schema  
  title: 'Order', // Title displayed in the Sanity Studio  
  type: 'document', // Type of the schema (document, object, etc.)  
  fields: [  
      { name: 'name', title: 'Name', type: 'string' },  
      { name: 'email', title: 'Email', type: 'string' },  
      { name: 'country', title: 'Country', type: 'string' },  
      { name: 'address', title: 'Address', type: 'string' },  
      { name: 'city', title: 'City', type: 'string' },  
      { name: 'contact', title: 'Contact Number', type: 'string' },  
      { name: 'createdAt', title: 'Created At', type: 'datetime' },  
      {  
          name: 'items', // Field for ordered items  
          title: 'Items',  
          type: 'array', // An array to hold multiple items  
          of: [{  
              type: 'object', // Each item will be an object  
              fields: [  
                  { name: 'productId', title: 'Product ID', type: 'string' }, // Unique ID for the product  
                  { name: 'productName', title: 'Product Name', type: 'string' }, 
                  { name: "imageUrl", title: "Image URL", type: "string" },  
                  { name: 'quantity', title: 'Quantity', type: 'number' }, // Quantity ordered  
                  { name: 'price', title: 'Price', type: 'number' }, // Price of the product  
              ],  
          }],  
      },  
      {  
          name: 'totalPrice', // Field for total price of the order  
          title: 'Total Price',  
          type: 'number', // Total price as a number  
      },  
  ],  
};