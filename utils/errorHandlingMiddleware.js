const errorHandlerMiddleware = (err, req, res, next) => {
    err.message = err.message || "Something went wrong"
    err.statusCode = err.statusCode || 500
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        statusCode: err.statusCode
    })
}

module.exports = errorHandlerMiddleware