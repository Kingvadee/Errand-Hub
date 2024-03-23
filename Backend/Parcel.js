// parcel.js

const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
  trackingNumber: {
    type: String,
    required: true,
    unique: true
  },
  weight: {
    type: Number,
    required: true
  },
  recipient: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Transit', 'Delivered'],
    default: 'Pending'
  },
  deliveryDate: {
    type: Date
  }
});

const Parcel = mongoose.model('Parcel', parcelSchema);

module.exports = Parcel;
