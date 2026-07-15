const Testimonial = require("../models/Testimonial");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

// Create Testimonial
const createTestimonial = asyncHandler(async (req, res) => {
    const testimonial = await Testimonial.create(req.body);

    return res.status(201).json(
        new ApiResponse(201, testimonial, "Testimonial added successfully")
    );
});

// Get Public Testimonials
const getAllTestimonials = asyncHandler(async (req, res) => {
    const testimonials = await Testimonial.find({ isActive: true })
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(200, testimonials, "Testimonials fetched successfully")
    );
});

// Get Admin Testimonials
const getAdminTestimonials = asyncHandler(async (req, res) => {
    const testimonials = await Testimonial.find()
        .sort({ order: 1 })
        .lean();

    return res.status(200).json(
        new ApiResponse(200, testimonials, "Testimonials fetched successfully")
    );
});

// Get Testimonial By ID
const getTestimonialById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const testimonial = await Testimonial.findById(id);

    if (!testimonial) {
        throw new ApiError(404, "Testimonial not found");
    }

    return res.status(200).json(
        new ApiResponse(200, testimonial, "Testimonial fetched successfully")
    );
});

// Update Testimonial
const updateTestimonial = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const testimonial = await Testimonial.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!testimonial) {
        throw new ApiError(404, "Testimonial not found");
    }

    return res.status(200).json(
        new ApiResponse(200, testimonial, "Testimonial updated successfully")
    );
});

// Delete Testimonial
const deleteTestimonial = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const testimonial = await Testimonial.findById(id);

    if (!testimonial) {
        throw new ApiError(404, "Testimonial not found");
    }

    await testimonial.deleteOne();

    return res.status(200).json(
        new ApiResponse(200, {}, "Testimonial deleted successfully")
    );
});

module.exports = {
    createTestimonial,
    getAllTestimonials,
    getAdminTestimonials,
    getTestimonialById,
    updateTestimonial,
    deleteTestimonial,
};