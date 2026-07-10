const mongoose = require("mongoose");
const logger = require("../utils/logger");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);

        logger.success("MongoDB Connected");
        logger.info(`Database Host: ${connection.connection.host}`);
    } catch (error) {
        logger.error(`MongoDB Connection Failed: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;