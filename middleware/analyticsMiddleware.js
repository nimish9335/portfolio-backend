const Visitor = require("../models/Visitor");
const User = require("../models/User");

const trackVisitor = async (req, res, next) => {
    try {
        const { username } = req.params;

        // Only track portfolio routes that contain a username
        if (!username) {
            return next();
        }

        // Find portfolio owner
        const user = await User.findOne({
            username,
            portfolioPublished: true,
        }).select("_id");

        if (!user) {
            return next();
        }

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
            user: user._id,
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