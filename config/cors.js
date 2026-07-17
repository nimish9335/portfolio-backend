const cors = require("cors");

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      process.env.CLIENT_URL,
      "http://localhost:5173",
      "http://localhost:3000",
    ];

    // Allow requests with no origin (Postman, mobile apps, etc.)
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },

  credentials: true,

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],
};

module.exports = cors(corsOptions);