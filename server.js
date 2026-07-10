require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            logger.success(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        logger.error(`Failed to start server: ${error.message}`);
        process.exit(1);
    }
};

startServer();