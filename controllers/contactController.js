const Contact = require("../models/Contact");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

/**
 * @desc    Submit Contact Message
 * @route   POST /api/contact
 * @access  Public
 */
const createContact = asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
        name,
        email,
        subject,
        message,
    });

    return res.status(201).json(
        new ApiResponse(201, contact, "Message sent successfully")
    );
});

/**
 * @desc    Get All Messages
 * @route   GET /api/contact
 * @access  Private (Admin)
 */
const getContacts = asyncHandler(async (req, res) => {
    const {
        page = 1,
        limit = 10,
        status,
        search,
    } = req.query;

    const filter = {};

    if (status) {
        filter.status = status;
    }

    if (search) {
        filter.$text = {
            $search: search,
        };
    }

    const contacts = await Contact.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .lean();

    const total = await Contact.countDocuments(filter);

    return res.json(
        new ApiResponse(
            200,
            {
                total,
                page: Number(page),
                pages: Math.ceil(total / limit),
                contacts,
            },
            "Messages fetched successfully"
        )
    );
});

/**
 * @desc    Get Single Message
 * @route   GET /api/contact/:id
 * @access  Private (Admin)
 */
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        throw new ApiError(404, "Message not found");
    }

    return res.json(
        new ApiResponse(
            200,
            contact,
            "Message fetched successfully"
        )
    );
});

/**
 * @desc    Update Message Status
 * @route   PUT /api/contact/:id
 * @access  Private (Admin)
 */
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        throw new ApiError(404, "Message not found");
    }

    const { status, replied } = req.body;

    // Update Read Status
    if (status) {
        contact.status = status;
        contact.readAt = status === "read" ? new Date() : null;
    }

    // Update Reply Status
    if (typeof replied === "boolean") {
        contact.replied = replied;
        contact.repliedAt = replied ? new Date() : null;
    }

    await contact.save();

    return res.json(
        new ApiResponse(
            200,
            contact,
            "Message updated successfully"
        )
    );
});

/**
 * @desc    Delete Message
 * @route   DELETE /api/contact/:id
 * @access  Private (Admin)
 */
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        throw new ApiError(404, "Message not found");
    }

    await contact.deleteOne();

    return res.json(
        new ApiResponse(
            200,
            null,
            "Message deleted successfully"
        )
    );
});

module.exports = {
    createContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
};