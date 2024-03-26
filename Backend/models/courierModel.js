// Import mongoose library for defining MongoDB schemas
const mongoose = require('mongoose')

// Define a new mongoose schema for the Courier model
const courierSchema = new mongoose.Schema({
  // Sender details: reference to a Customer document in the Customer collection
  senderDetails: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Customer', // Referencing the Customer model
  },
  // Receiver details: reference to a Customer document in the Customer collection
  receiverDetails: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Customer', // Referencing the Customer model
  },
  // Name of the package being delivered
  packageName: {
    type: String,
    required: true,
  },
  // Weight of the package
  packageWeight: {
    type: String,
    required: true,
  },
  // Tracker: an object containing department IDs as keys and references to Department documents
  tracker: {
    type: Object,
    of: { type: mongoose.Schema.ObjectId, required: true, ref: 'Department' },
  },
  // Delivery agent assigned to the courier
  deliveryAgent: {
    type: mongoose.Schema.ObjectId,
    required: false,
    ref: 'DeliveryAgent', // Referencing the DeliveryAgent model
  },
  // Status of the courier for each department
  departmentStatus: {
    type: Object, // Object containing department ID and status pairs
    required: true, // Possible values: accepted, out of delivery, dispatched, unsuccessful, delivered
  },
  // Overall status of the courier
  status: {
    type: String,
    required: true,
  },
  // Date when the package was picked up
  pickupDate: {
    type: Date,
    required: false,
  },
  // Date when the package was delivered
  deliveredDate: {
    type: Date,
    required: false,
  },
  // Timestamp for the last update of the courier document
  updatedAt: {
    type: Date,
    default: Date.now(), // Default value is the current timestamp
  },
  // Timestamp for the creation of the courier document
  createdAt: {
    type: Date,
    default: Date.now(), // Default value is the current timestamp
  },
})

// Export the mongoose model for the Courier schema
module.exports = mongoose.model('Courier', courierSchema)
