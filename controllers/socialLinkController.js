const SocialLink = require("../models/SocialLink");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// ==============================
// CREATE SOCIAL LINK
// ==============================

const createSocialLink = asyncHandler(async (req, res) => {
    const socialLink = await SocialLink.create({
        user: req.user._id,
        platform: req.body.platform,
        url: req.body.url,
        icon: req.body.icon,
        order: req.body.order,
        isActive: req.body.isActive,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            socialLink,
            "Social link created successfully"
        )
    );
});

// ==============================
// GET CURRENT USER SOCIAL LINKS
// ==============================

const getAllSocialLinks = asyncHandler(async (req, res) => {
    const socialLinks = await SocialLink.find({
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
            socialLinks,
            "Social links fetched successfully"
        )
    );
});

// ==============================
// GET SOCIAL LINK BY ID
// ==============================

const getSocialLinkById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const socialLink = await SocialLink.findOne({
        _id: id,
        user: req.user._id,
    }).lean();

    if (!socialLink) {
        throw new ApiError(404, "Social link not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            socialLink,
            "Social link fetched successfully"
        )
    );
});

// ==============================
// UPDATE SOCIAL LINK
// ==============================

const updateSocialLink = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const socialLink = await SocialLink.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!socialLink) {
        throw new ApiError(404, "Social link not found");
    }

    const allowedFields = [
        "platform",
        "url",
        "icon",
        "order",
        "isActive",
    ];

    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            socialLink[field] = req.body[field];
        }
    });

    await socialLink.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            socialLink,
            "Social link updated successfully"
        )
    );
});

// ==============================
// DELETE SOCIAL LINK
// ==============================

const deleteSocialLink = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const socialLink = await SocialLink.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!socialLink) {
        throw new ApiError(404, "Social link not found");
    }

    await socialLink.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Social link deleted successfully"
        )
    );
});

module.exports = {
    createSocialLink,
    getAllSocialLinks,
    getSocialLinkById,
    updateSocialLink,
    deleteSocialLink,
};