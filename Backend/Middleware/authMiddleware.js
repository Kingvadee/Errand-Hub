// Load environment variables from a .env file into process.env
require('dotenv').config()

// Import the jsonwebtoken library
const jwt = require('jsonwebtoken')

// Middleware function to authorize a token for department access
function authorizeToken(req, res, next) {
  // Extract the authorization header from the request
  const authHeader = req.headers.authorization

  // Extract the token from the authorization header
  const token = authHeader && authHeader.split(' ')[1]

  // Check if token is missing
  if (token == null) {
    // If token is missing, send a 401 Unauthorized response
    return res.status(401).json({
      status: 'failure',
      message: 'Unauthorized',
      data: {},
    })
  }

  // Verify the token using the JWT_SECRET stored in the environment variables
  jwt.verify(token, process.env.JWT_SECRET, (err, departmentInfo) => {
    // If there's an error while verifying the token
    if (err) {
      // Send a 403 Forbidden response indicating an invalid access token
      return res.status(403).json({
        status: 'failure',
        message: 'Invalid access token',
        data: {},
      })
    }
    // If token is valid, attach the department information to the request object
    req.department = departmentInfo
    // Proceed to the next middleware
    next()
  })
}

// Middleware function to authorize a token for delivery agent access
function authorizeDeliveryAgentToken(req, res, next) {
  // Extract the authorization header from the request
  const authHeader = req.headers.authorization

  // Extract the token from the authorization header
  const token = authHeader && authHeader.split(' ')[1]

  // Check if token is missing
  if (token == null) {
    // If token is missing, send a 401 Unauthorized response
    return res.status(401).json({
      status: 'failure',
      message: 'Unauthorized',
      data: {},
    })
  }

  // Verify the token using the JWT_SECRET stored in the environment variables
  jwt.verify(token, process.env.JWT_SECRET, (err, deliveryAgentInfo) => {
    // If there's an error while verifying the token
    if (err) {
      // Send a 403 Forbidden response indicating an invalid access token
      return res.status(403).json({
        status: 'failure',
        message: 'Invalid access token',
        data: {},
      })
    }
    // If token is valid, attach the delivery agent information to the request object
    req.deliveryAgent = deliveryAgentInfo
    // Proceed to the next middleware
    next()
  })
}

// Export the middleware functions to be used in other parts of the application
module.exports = {
  authorize: authorizeToken, // Export the department authorization middleware
  authorizeDeliveryAgent: authorizeDeliveryAgentToken, // Export the delivery agent authorization middleware
}
