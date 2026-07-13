const Skill = require("../models/Skill");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const {
    uploadToCloudinary,
    deleteFromCloudinary,
} = require("../services/cloudinary");

const createSkill = asyncHandler(async (req, res) => {
    const { name, category, level, order, isActive } = req.body;

    let icon = {
        url: "",
        public_id: "",
    };

    if (req.file) {
        const uploadedImage = await uploadToCloudinary(req.file.buffer, "skills");

        icon = {
            url: uploadedImage.secure_url,
            public_id: uploadedImage.public_id,
        };
    }

    const skill = await Skill.create({
        name,
        category,
        level,
        order,
        isActive,
        icon,
    });

    return res
        .status(201)
        .json(new ApiResponse(201, skill, "Skill created successfully"));
});

const getAllSkills = asyncHandler(async (req, res) => {
    const skills = await Skill.find({ isActive: true })
        .sort({ order: 1 })
        .lean();

    return res
        .status(200)
        .json(new ApiResponse(200, skills, "Skills fetched successfully"));
});

const getAdminSkills = asyncHandler(async (req, res) => {
    const skills = await Skill.find()
        .sort({ order: 1 })
        .lean();

    return res
        .status(200)
        .json(new ApiResponse(200, skills, "Skills fetched successfully"));
});

const updateSkill = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const skill = await Skill.findById(id);

    if (!skill) {
        throw new ApiError(404, "Skill not found");
    }

    if (req.file) {
        if (skill.icon.public_id) {
            await deleteFromCloudinary(skill.icon.public_id);
        }

        const uploadedImage = await uploadToCloudinary(req.file.buffer, "skills");

        skill.icon = {
            url: uploadedImage.secure_url,
            public_id: uploadedImage.public_id,
        };
    }

    Object.assign(skill, req.body);

    await skill.save();

    return res
        .status(200)
        .json(new ApiResponse(200, skill, "Skill updated successfully"));
});

const deleteSkill = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const skill = await Skill.findById(id);

    if (!skill) {
        throw new ApiError(404, "Skill not found");
    }

    if (skill.icon.public_id) {
        await deleteFromCloudinary(skill.icon.public_id);
    }

    await skill.deleteOne();

    return res
        .status(200)
        .json(new ApiResponse(200, null, "Skill deleted successfully"));
});

module.exports = {
    createSkill,
    getAllSkills,
    getAdminSkills,
    updateSkill,
    deleteSkill,
};