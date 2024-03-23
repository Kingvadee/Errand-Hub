const mongoose = require('mongoose');

const dispatchRiderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }, // New field for email
  idCard: { // New field for ID card upload
    type: String, // This can be a path to the uploaded file (if storing locally)
    // OR
    type: mongoose.Schema.Types.ObjectId, // Reference to an uploaded file document (if using a separate collection for uploads)
  },
});

module.exports = mongoose.model('DispatchRider', dispatchRiderSchema);
