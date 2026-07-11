const Project = require("../models/Project");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

const createProject = asyncHandler(async (req, res) => {
    const project = await Project.create(req.body);

    return res.status(201).json(
        new ApiResponse(
            201,
            project,
            "Project created successfully."
        )
    );
});

const getAllProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({
        isPublished: true,
    }).sort({
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

const getProjectById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const project = await Project.findOne({
        _id: id,
        isPublished: true,
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

const updateProject = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const updatedProject = await Project.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!updatedProject) {
        throw new ApiError(404, "Project not found.");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedProject,
            "Project updated successfully."
        )
    );
});

const deleteProject = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
        throw new ApiError(404, "Project not found.");
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