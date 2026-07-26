const Project = require("../models/Project");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

const {
    uploadToCloudinary,
    deleteFromCloudinary,
} = require("../services/cloudinary");


// ==============================
// CREATE PROJECT
// ==============================

const createProject = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "Project thumbnail is required.");
    }

    const uploadedImage = await uploadToCloudinary(
        req.file.buffer,
        "portfolio/projects"
    );

    let { techStack } = req.body;

    if (typeof techStack === "string") {
        techStack = techStack
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean);
    }

    const project = await Project.create({
        ...req.body,

        // Ownership
        user: req.user._id,

        techStack,

        thumbnail: {
            url: uploadedImage.secure_url,
            public_id: uploadedImage.public_id,
        },
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            project,
            "Project created successfully."
        )
    );
});


// ==============================
// GET CURRENT USER PROJECTS
// ==============================

const getAllProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({
        user: req.user._id,
    })
        .sort({
            order: 1,
            createdAt: -1,
        })
        .lean();

    return res.status(200).json(
        new ApiResponse(
            200,
            projects,
            "Projects fetched successfully."
        )
    );
});


// ==============================
// GET CURRENT USER PROJECT BY ID
// ==============================

const getProjectById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const project = await Project.findOne({
        _id: id,
        user: req.user._id,
    }).lean();

    if (!project) {
        throw new ApiError(404, "Project not found.");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            project,
            "Project fetched successfully."
        )
    );
});


// ==============================
// UPDATE CURRENT USER PROJECT
// ==============================

const updateProject = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const project = await Project.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!project) {
        throw new ApiError(404, "Project not found.");
    }

    let { techStack } = req.body;

    if (typeof techStack === "string") {
        techStack = techStack
            .split(",")
            .map((tech) => tech.trim())
            .filter(Boolean);
    }

    if (req.file) {
        if (project.thumbnail?.public_id) {
            await deleteFromCloudinary(
                project.thumbnail.public_id
            );
        }

        const uploadedImage = await uploadToCloudinary(
            req.file.buffer,
            "portfolio/projects"
        );

        project.thumbnail = {
            url: uploadedImage.secure_url,
            public_id: uploadedImage.public_id,
        };
    }

    project.title =
        req.body.title ?? project.title;

    project.description =
        req.body.description ?? project.description;

    project.techStack =
        techStack ?? project.techStack;

    project.githubUrl =
        req.body.githubUrl ?? project.githubUrl;

    project.liveUrl =
        req.body.liveUrl ?? project.liveUrl;

    project.featured =
        req.body.featured ?? project.featured;

    project.order =
        req.body.order ?? project.order;

    project.isPublished =
        req.body.isPublished ?? project.isPublished;

    await project.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            project,
            "Project updated successfully."
        )
    );
});


// ==============================
// DELETE CURRENT USER PROJECT
// ==============================

const deleteProject = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const project = await Project.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!project) {
        throw new ApiError(404, "Project not found.");
    }

    // Delete thumbnail from Cloudinary
    if (project.thumbnail?.public_id) {
        await deleteFromCloudinary(
            project.thumbnail.public_id
        );
    }

    // Delete gallery images from Cloudinary
    if (project.gallery?.length > 0) {
        for (const image of project.gallery) {
            if (image.public_id) {
                await deleteFromCloudinary(
                    image.public_id
                );
            }
        }
    }

    await project.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Project deleted successfully."
        )
    );
});


module.exports = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
};