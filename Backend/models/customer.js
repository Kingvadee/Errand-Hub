// Importing mongoose library for MongoDB schema modeling and operations
const mongoose = require('mongoose')

// Defining a schema for the Customer model using mongoose.Schema
const customerSchema = new mongoose.Schema({
  // Defining a field 'name' of type String, which is required
  name: {
    type: String,
    required: true,
  },
  // Defining a field 'phoneNumber' of type String, which is required
  phoneNumber: {
    type: String,
    required: true,
  },
  // Defining a field 'email' of type String, which is required
  email: {
    type: String,
    required: true,
  },
  // Defining a field 'location' of type String, which is required
  location: {
    type: String,
    required: true,
  },
  // Defining a field 'city' of type String, which is required
  city: {
    type: String,
    required: true,
  },
  // Defining a field 'state' of type String, which is required
  state: {
    type: String,
    required: true,
  },
  // Defining a field 'pincode' of type String, which is required
  pincode: {
    type: String,
    required: true,
  },
  // Defining a field 'country' of type String, which is required
  country: {
    type: String,
    required: true,
  },
})

// Exporting the mongoose model 'Customer' using the defined schema
module.exports = mongoose.model('Customer', customerSchema)
