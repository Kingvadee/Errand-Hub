const mongoose = require('mongoose')  // Importing mongoose library for MongoDB schema modeling

const departmentSchema = new mongoose.Schema({  // Defining a new mongoose schema for departments
  name: {  // Field for department name
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
  },
  registrationNumber: {  // Field for registration number of the department
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
  },
  password: {  // Field for department password
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
  },
  location: {  // Field for department location
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
  },
  contactNumber: {  // Field for department contact number
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
  },
  contactEmail: {  // Field for department contact email
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
  },
  city: {  // Field for department city
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
    default: 'Ikeja',  // Default value is 'Ikeja' if not provided
  },
  state: {  // Field for department state
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
    default: 'Lagos',  // Default value is 'Lagos' if not provided
  },
  pinCode: {  // Field for department pin code
    type: Number,  // Data type is number
    required: true,  // It is required (mandatory)
  },
  country: {  // Field for department country
    type: String,  // Data type is string
    required: true,  // It is required (mandatory)
    default: 'Nigeria',  // Default value is 'Nigeria' if not provided
  },
})

module.exports = mongoose.model('Department', departmentSchema)  // Exporting the mongoose model for department with the defined schema
