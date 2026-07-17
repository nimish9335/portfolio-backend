const Visitor = require("../models/Visitor");

const trackVisitor = async (req, res, next) => {
  try {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      "Unknown";

    let device = "Unknown";

    if (req.useragent.isDesktop) device = "Desktop";
    else if (req.useragent.isMobile) device = "Mobile";
    else if (req.useragent.isTablet) device = "Tablet";
    else if (req.useragent.isBot) device = "Bot";

    await Visitor.create({
      ip,
      browser: req.useragent.browser || "Unknown",
      os: req.useragent.os || "Unknown",
      device,
      page: req.originalUrl,
      referrer: req.get("Referrer") || "Direct",
      userAgent: req.useragent.source,
    });

    next();
  } catch (error) {
    next();
  }
};

module.exports = trackVisitor;