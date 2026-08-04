const Contact = require("../models/Contact");
const User = require("../models/User");

const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

/**
 * @desc    Submit Contact Message
 * @route   POST /api/contact
 * @access  Public
 */
const createContact = asyncHandler(async (req, res) => {
    const { username, name, email, subject, message } = req.body;

    const owner = await User.findOne({ username }).select("_id");

    if (!owner) {
        throw new ApiError(404, "Portfolio owner not found");
    }

    const contact = await Contact.create({
        user: owner._id,
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
 * @access  Private
 */
const getContacts = asyncHandler(async (req, res) => {
    const {
        page = 1,
        limit = 10,
        status,
        replied,
        search,
    } = req.query;

    const filter = {
        user: req.user._id,
    };

    if (status) {
        filter.status = status;
    }

    if (replied !== undefined) {
        filter.replied = replied === "true";
    }

    if (search) {
        filter.$text = {
            $search: search,
        };
    }

    const contacts = await Contact.find(filter)
        .sort({ createdAt: -1 })
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit))
        .lean();

    const total = await Contact.countDocuments(filter);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                total,
                page: Number(page),
                pages: Math.ceil(total / Number(limit)),
                contacts,
            },
            "Messages fetched successfully"
        )
    );
});

/**
 * @desc    Get Single Message
 * @route   GET /api/contact/:id
 * @access  Private
 */
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findOne({
        _id: req.params.id,
        user: req.user._id,
    });

    if (!contact) {
        throw new ApiError(404, "Message not found");
    }

    if (contact.status === "unread") {
        contact.status = "read";
        contact.readAt = new Date();
        await contact.save();
    }

    return res.status(200).json(
        new ApiResponse(200, contact, "Message fetched successfully")
    );
});

/**
 * @desc    Update Message
 * @route   PUT /api/contact/:id
 * @access  Private
 */
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findOne({
        _id: req.params.id,
        user: req.user._id,
    });

    if (!contact) {
        throw new ApiError(404, "Message not found");
    }

    const { status, replied } = req.body;

    if (status) {
        contact.status = status;
        contact.readAt = status === "read" ? new Date() : null;
    }

    if (typeof replied === "boolean") {
        contact.replied = replied;
        contact.repliedAt = replied ? new Date() : null;
    }

    await contact.save();

    return res.status(200).json(
        new ApiResponse(200, contact, "Message updated successfully")
    );
});

/**
 * @desc    Delete Message
 * @route   DELETE /api/contact/:id
 * @access  Private
 */
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findOne({
        _id: req.params.id,
        user: req.user._id,
    });

    if (!contact) {
        throw new ApiError(404, "Message not found");
    }

    await contact.deleteOne();

    return res.status(200).json(
        new ApiResponse(200, null, "Message deleted successfully")
    );
});

module.exports = {
    createContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
};