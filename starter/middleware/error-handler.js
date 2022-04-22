const { CustomAPIError } = require('../errors/custom-error')

const errorHandleMiddleware = (err, req, res, next) => {
    // return res.status(500).json({msg:err})
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    // console.log(err);
    return res.status(500).json({ msg: "Something Went wrong! Try Again..." })
}

module.exports = errorHandleMiddleware;