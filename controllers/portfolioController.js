const User = require("../models/User");
const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Education = require("../models/Education");
const Experience = require("../models/Experience");
const Certification = require("../models/Certification");
const Testimonial = require("../models/Testimonial");
const Resume = require("../models/Resume");
const SocialLink = require("../models/SocialLink");
const Setting = require("../models/Setting");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// ==========================================
// GET PUBLIC PORTFOLIO
// GET /api/portfolio/:username
// ==========================================

const getPublicPortfolio = asyncHandler(async (req, res) => {
    const { username } = req.params;

    // Get Public Profile
    const user = await User.findOne({
        username,
        portfolioPublished: true, })
        .select(
            "fullName username avatar headline bio location"
        )
        .lean();

    if (!user) {
        throw new ApiError(404, "Portfolio not found");
    }

    // Fetch all portfolio sections in parallel
    const [
        projects,
        skills,
        education,
        experience,
        certifications,
        testimonials,
        resume,
        socialLinks,
        settings,
    ] = await Promise.all([
        Project.find({
            user: user._id,
            isPublished: true,
        })
            .select("-user -__v")
            .sort({ order: 1 })
            .lean(),

        Skill.find({
            user: user._id,
            isActive: true,
        })
            .select("-user -__v")
            .sort({ order: 1 })
            .lean(),

        Education.find({
            user: user._id,
            isActive: true,
        })
            .select("-user -__v")
            .sort({ order: 1 })
            .lean(),

        Experience.find({
            user: user._id,
            isActive: true,
        })
            .select("-user -__v")
            .sort({ order: 1 })
            .lean(),

        Certification.find({
            user: user._id,
            isActive: true,
        })
            .select("-user -__v")
            .sort({ order: 1 })
            .lean(),

        Testimonial.find({
            user: user._id,
            isActive: true,
        })
            .select("-user -__v")
            .sort({ order: 1 })
            .lean(),

        Resume.findOne({
            user: user._id,
            isActive: true,
        })
            .select("-user -__v")
            .lean(),

        SocialLink.find({
            user: user._id,
            isActive: true,
        })
            .select("-user -__v")
            .sort({ order: 1 })
            .lean(),

        Setting.findOne({
            user: user._id,
        })
            .select("-user -__v")
            .lean(),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                profile: user,
                projects,
                skills,
                education,
                experience,
                certifications,
                testimonials,
                resume,
                socialLinks,
                settings,
            },
            "Portfolio fetched successfully"
        )
    );
});

module.exports = {
    getPublicPortfolio,
};