// Import mongoose module
const mongoose = require('mongoose');

// Define the schema for a delivery agent
const deliveryAgentSchema = new mongoose.Schema({
  // Define 'name' field with type String, which is required
  name: {
    type: String,
    required: true, // Name is a required field
  },
  // Define 'phoneNumber' field with type String, which is required
  phoneNumber: {
    type: String,
    required: true, // Phone number is a required field
  },
  // Define 'email' field with type String, which is required
  email: {
    type: String,
    required: true, // Email is a required field
  },
  // Define 'password' field with type String, which is required
  password: {
    type: String,
    required: true, // Password is a required field
  },
  // Define 'idCard' field with type String
  idCard: {
    type: String, // This will store the file path or ID card data (depending on implementation)
  },
  // Define 'vehicleType' field with type String and limited to specific values (enum)
  vehicleType: {
    type: String,
    enum: ['Motorcycle', 'Car', 'Van'], // Vehicle type can only be one of these values
    required: true, // Vehicle type is a required field
  },
});

// Create and export the DeliveryAgent model using the defined schema
module.exports = mongoose.model('DeliveryAgent', deliveryAgentSchema);
