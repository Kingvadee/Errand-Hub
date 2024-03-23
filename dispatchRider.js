// dispatchRider.js
const mongoose = require('mongoose');

const dispatchRiderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  // You can add more fields such as location
