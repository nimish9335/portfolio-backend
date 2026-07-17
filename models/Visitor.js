const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
      trim: true,
    },

    country: {
      type: String,
      default: "Unknown",
      trim: true,
    },

    city: {
      type: String,
      default: "Unknown",
      trim: true,
    },

    browser: {
      type: String,
      default: "Unknown",
      trim: true,
    },

    os: {
      type: String,
      default: "Unknown",
      trim: true,
    },

    device: {
      type: String,
      enum: ["Desktop", "Mobile", "Tablet", "Bot", "Unknown"],
      default: "Unknown",
    },

    page: {
      type: String,
      required: true,
      trim: true,
    },

    referrer: {
      type: String,
      default: "Direct",
      trim: true,
    },

    userAgent: {
      type: String,
      required: true,
      trim: true,
    },

    visitedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

visitorSchema.index({ page: 1 });
visitorSchema.index({ country: 1 });
visitorSchema.index({ browser: 1 });
visitorSchema.index({ device: 1 });
visitorSchema.index({ visitedAt: -1 });

module.exports = mongoose.model("Visitor", visitorSchema);