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
    Project.countDocuments(),
    Blog.countDocuments(),
    Skill.countDocuments(),
    Experience.countDocuments(),
    Education.countDocuments(),
    Certification.countDocuments(),
    Testimonial.countDocuments(),
    Contact.countDocuments(),
    Contact.countDocuments({ status: "unread" }),
    Visitor.countDocuments(),
    Visitor.countDocuments(),
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
  const [recentProjects, recentBlogs, recentMessages] = await Promise.all([
    Project.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title slug createdAt"),

    Blog.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title slug createdAt"),

    Contact.find()
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
    Project.countDocuments(),
    Blog.countDocuments(),
    Skill.countDocuments(),
    Experience.countDocuments(),
    Education.countDocuments(),
    Certification.countDocuments(),
    Testimonial.countDocuments(),
    Contact.countDocuments(),
    Contact.countDocuments({ status: "unread" }),
    Visitor.countDocuments(),
    Visitor.countDocuments(),

    Project.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title slug createdAt"),

    Blog.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title slug createdAt"),

    Contact.find()
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