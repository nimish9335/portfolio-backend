const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // Mongoose Validation Error
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors)
            .map((error) => error.message)
            .join(", ");
    }

    // Duplicate Key Error
    if (err.code === 11000) {
        statusCode = 409;

        const field = Object.keys(err.keyValue)[0];
        message = `${field} already exists.`;
    }

    // Invalid MongoDB ObjectId
    if (err.name === "CastError") {
        statusCode = 400;
        message = `Invalid ${err.path}.`;
    }

    // Invalid JWT
    if (err.name === "JsonWebTokenError") {
        statusCode = 401;
        message = "Invalid authentication token.";
    }

    // Expired JWT
    if (err.name === "TokenExpiredError") {
        statusCode = 401;
        message = "Authentication token has expired.";
    }

    res.status(statusCode).json({
        success: false,
        message,
    });
};

module.exports = errorHandler;