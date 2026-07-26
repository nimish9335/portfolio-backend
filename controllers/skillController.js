const Skill = require("../models/Skill");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

const {
    uploadToCloudinary,
    deleteFromCloudinary,
} = require("../services/cloudinary");


// ==============================
// CREATE SKILL
// ==============================

const createSkill = asyncHandler(async (req, res) => {
    const {
        name,
        category,
        level,
        order,
        isActive,
    } = req.body;

    let icon = {
        url: "",
        public_id: "",
    };

    if (req.file) {
        const uploadedImage = await uploadToCloudinary(
            req.file.buffer,
            "skills"
        );

        icon = {
            url: uploadedImage.secure_url,
            public_id: uploadedImage.public_id,
        };
    }

    const skill = await Skill.create({
        user: req.user._id,
        name,
        category,
        level,
        order,
        isActive,
        icon,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            skill,
            "Skill created successfully"
        )
    );
});


// ==============================
// GET CURRENT USER SKILLS
// ==============================

const getAllSkills = asyncHandler(async (req, res) => {
    const skills = await Skill.find({
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
            skills,
            "Skills fetched successfully"
        )
    );
});


// ==============================
// UPDATE CURRENT USER SKILL
// ==============================

const updateSkill = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const skill = await Skill.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!skill) {
        throw new ApiError(404, "Skill not found");
    }

    if (req.file) {
        if (skill.icon?.public_id) {
            await deleteFromCloudinary(
                skill.icon.public_id
            );
        }

        const uploadedImage = await uploadToCloudinary(
            req.file.buffer,
            "skills"
        );

        skill.icon = {
            url: uploadedImage.secure_url,
            public_id: uploadedImage.public_id,
        };
    }

    const allowedFields = [
        "name",
        "category",
        "level",
        "order",
        "isActive",
    ];

    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            skill[field] = req.body[field];
        }
    });

    await skill.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            skill,
            "Skill updated successfully"
        )
    );
});


// ==============================
// DELETE CURRENT USER SKILL
// ==============================

const deleteSkill = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const skill = await Skill.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!skill) {
        throw new ApiError(404, "Skill not found");
    }

    if (skill.icon?.public_id) {
        await deleteFromCloudinary(
            skill.icon.public_id
        );
    }

    await skill.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Skill deleted successfully"
        )
    );
});


module.exports = {
    createSkill,
    getAllSkills,
    updateSkill,
    deleteSkill,
};