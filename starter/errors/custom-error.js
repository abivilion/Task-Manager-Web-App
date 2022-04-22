class CustomAPIError extends Error {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = statusCode;
    }
}

// this will be called 
const createCustomError = (msg,statusCode) => {
  return new CustomAPIError(msg,statusCode)
}

//exports
module.exports ={ createCustomError, CustomAPIError}