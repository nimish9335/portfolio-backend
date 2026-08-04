const Project = require("../models/Project");
const Blog = require("../models/Blog");
const Skill = require("../models/Skill");
const Experience = require("../models/Experience");
const Education = require("../models/Education");
const Certification = require("../models/Certification");
const Testimonial = require("../models/Testimonial");
const Contact = require("../models/Contact");
const Visitor = require("../models/Visitor");

const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const getDashboardSummary = asyncHandler(async (req, res) => {
    const filter = { user: req.user._id };

    const [
        projects,
        blogs,
        skills,
        experience,
        education,
        certifications,
        testimonials,
        contacts,
        unreadMessages,
        visitors,
        pageViews,
    ] = await Promise.all([
        Project.countDocuments(filter),
        Blog.countDocuments(filter),
        Skill.countDocuments(filter),
        Experience.countDocuments(filter),
        Education.countDocuments(filter),
        Certification.countDocuments(filter),
        Testimonial.countDocuments(filter),
        Contact.countDocuments(filter),
        Contact.countDocuments({
            ...filter,
            status: "unread",
        }),
        Visitor.countDocuments(filter),
        Visitor.countDocuments(filter),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                projects,
                blogs,
                skills,
                experience,
                education,
                certifications,
                testimonials,
                contacts,
                unreadMessages,
                visitors,
                pageViews,
            },
            "Dashboard summary fetched successfully"
        )
    );
});

const getRecentActivity = asyncHandler(async (req, res) => {
    const filter = { user: req.user._id };

    const [recentProjects, recentBlogs, recentMessages] = await Promise.all([
        Project.find(filter)
            .sort({ createdAt: -1 })
            .limit(5)
            .select("title slug createdAt"),

        Blog.find(filter)
            .sort({ createdAt: -1 })
            .limit(5)
            .select("title slug createdAt"),

        Contact.find(filter)
            .sort({ createdAt: -1 })
            .limit(5)
            .select("name email subject status createdAt"),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                recentProjects,
                recentBlogs,
                recentMessages,
            },
            "Recent dashboard activity fetched successfully"
        )
    );
});

const getDashboard = asyncHandler(async (req, res) => {
    const filter = { user: req.user._id };

    const [
        projects,
        blogs,
        skills,
        experience,
        education,
        certifications,
        testimonials,
        contacts,
        unreadMessages,
        visitors,
        pageViews,
        recentProjects,
        recentBlogs,
        recentMessages,
    ] = await Promise.all([
        Project.countDocuments(filter),
        Blog.countDocuments(filter),
        Skill.countDocuments(filter),
        Experience.countDocuments(filter),
        Education.countDocuments(filter),
        Certification.countDocuments(filter),
        Testimonial.countDocuments(filter),
        Contact.countDocuments(filter),
        Contact.countDocuments({
            ...filter,
            status: "unread",
        }),
        Visitor.countDocuments(filter),
        Visitor.countDocuments(filter),

        Project.find(filter)
            .sort({ createdAt: -1 })
            .limit(5)
            .select("title slug createdAt"),

        Blog.find(filter)
            .sort({ createdAt: -1 })
            .limit(5)
            .select("title slug createdAt"),

        Contact.find(filter)
            .sort({ createdAt: -1 })
            .limit(5)
            .select("name email subject status createdAt"),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                summary: {
                    projects,
                    blogs,
                    skills,
                    experience,
                    education,
                    certifications,
                    testimonials,
                    contacts,
                    unreadMessages,
                    visitors,
                    pageViews,
                },
                recentActivity: {
                    recentProjects,
                    recentBlogs,
                    recentMessages,
                },
            },
            "Dashboard data fetched successfully"
        )
    );
});

module.exports = {
    getDashboardSummary,
    getRecentActivity,
    getDashboard,
};