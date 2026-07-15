const SocialLink = require("../models/SocialLink");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

/**
 * @desc Create Social Link
 * @route POST /api/social-links
 * @access Private (Admin)
 */
const createSocialLink = asyncHandler(async (req, res) => {
    const socialLink = await SocialLink.create(req.body);

    return res.status(201).json(
        new ApiResponse(201, socialLink, "Social link created successfully")
    );
});

/**
 * @desc Get Public Social Links
 * @route GET /api/social-links
 * @access Public
 */
const getAllSocialLinks = asyncHandler(async (req, res) => {
    const socialLinks = await SocialLink.find({ isActive: true })
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(
            200,
            socialLinks,
            "Social links fetched successfully"
        )
    );
});

/**
 * @desc Get Admin Social Links
 * @route GET /api/social-links/admin
 * @access Private (Admin)
 */
const getAdminSocialLinks = asyncHandler(async (req, res) => {
    const socialLinks = await SocialLink.find()
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(
            200,
            socialLinks,
            "Admin social links fetched successfully"
        )
    );
});

/**
 * @desc Get Social Link By ID
 * @route GET /api/social-links/:id
 * @access Private (Admin)
 */
const getSocialLinkById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const socialLink = await SocialLink.findById(id).lean();

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

/**
 * @desc Update Social Link
 * @route PUT /api/social-links/:id
 * @access Private (Admin)
 */
const updateSocialLink = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const socialLink = await SocialLink.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!socialLink) {
        throw new ApiError(404, "Social link not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            socialLink,
            "Social link updated successfully"
        )
    );
});

/**
 * @desc Delete Social Link
 * @route DELETE /api/social-links/:id
 * @access Private (Admin)
 */
const deleteSocialLink = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const socialLink = await SocialLink.findById(id);

    if (!socialLink) {
        throw new ApiError(404, "Social link not found");
    }

    await socialLink.deleteOne();

    return res.status(200).json(
        new ApiResponse(200, null, "Social link deleted successfully")
    );
});

module.exports = {
    createSocialLink,
    getAllSocialLinks,
    getAdminSocialLinks,
    getSocialLinkById,
    updateSocialLink,
    deleteSocialLink,
};