const Testimonial = require("../models/Testimonial");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// ==============================
// CREATE TESTIMONIAL
// ==============================

const createTestimonial = asyncHandler(async (req, res) => {
    const testimonial = await Testimonial.create({
        user: req.user._id,
        name: req.body.name,
        designation: req.body.designation,
        company: req.body.company,
        message: req.body.message,
        rating: req.body.rating,
        featured: req.body.featured,
        order: req.body.order,
        isActive: req.body.isActive,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            testimonial,
            "Testimonial added successfully"
        )
    );
});

// ==============================
// GET CURRENT USER TESTIMONIALS
// ==============================

const getAllTestimonials = asyncHandler(async (req, res) => {
    const testimonials = await Testimonial.find({
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
            testimonials,
            "Testimonials fetched successfully"
        )
    );
});

// ==============================
// GET TESTIMONIAL BY ID
// ==============================

const getTestimonialById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const testimonial = await Testimonial.findOne({
        _id: id,
        user: req.user._id,
    }).lean();

    if (!testimonial) {
        throw new ApiError(404, "Testimonial not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            testimonial,
            "Testimonial fetched successfully"
        )
    );
});

// ==============================
// UPDATE TESTIMONIAL
// ==============================

const updateTestimonial = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const testimonial = await Testimonial.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!testimonial) {
        throw new ApiError(404, "Testimonial not found");
    }

    const allowedFields = [
        "name",
        "designation",
        "company",
        "message",
        "rating",
        "featured",
        "order",
        "isActive",
    ];

    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            testimonial[field] = req.body[field];
        }
    });

    await testimonial.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            testimonial,
            "Testimonial updated successfully"
        )
    );
});

// ==============================
// DELETE TESTIMONIAL
// ==============================

const deleteTestimonial = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const testimonial = await Testimonial.findOne({
        _id: id,
        user: req.user._id,
    });

    if (!testimonial) {
        throw new ApiError(404, "Testimonial not found");
    }

    await testimonial.deleteOne();

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Testimonial deleted successfully"
        )
    );
});

module.exports = {
    createTestimonial,
    getAllTestimonials,
    getTestimonialById,
    updateTestimonial,
    deleteTestimonial,
};