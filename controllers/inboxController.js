const Contact = require("../models/Contact");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

/**
 * @desc    Dashboard Summary
 * @route   GET /api/inbox/dashboard
 * @access  Private
 */
const getDashboard = asyncHandler(async (req, res) => {
    const filter = {
        user: req.user._id,
    };

    const [
        totalMessages,
        unreadMessages,
        readMessages,
        repliedMessages,
        pendingReplies,
        recentMessages,
    ] = await Promise.all([
        Contact.countDocuments(filter),

        Contact.countDocuments({
            ...filter,
            status: "unread",
        }),

        Contact.countDocuments({
            ...filter,
            status: "read",
        }),

        Contact.countDocuments({
            ...filter,
            replied: true,
        }),

        Contact.countDocuments({
            ...filter,
            replied: false,
        }),

        Contact.find(filter)
            .sort({ createdAt: -1 })
            .limit(5)
            .lean(),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalMessages,
                unreadMessages,
                readMessages,
                repliedMessages,
                pendingReplies,
                recentMessages,
            },
            "Dashboard fetched successfully"
        )
    );
});

/**
 * @desc    Get Recent Messages
 * @route   GET /api/inbox/recent
 * @access  Private
 */
const getRecentMessages = asyncHandler(async (req, res) => {
    const messages = await Contact.find({
        user: req.user._id,
    })
        .sort({ createdAt: -1 })
        .limit(10)
        .lean();

    return res.status(200).json(
        new ApiResponse(
            200,
            messages,
            "Recent messages fetched successfully"
        )
    );
});

/**
 * @desc    Message Statistics
 * @route   GET /api/inbox/stats
 * @access  Private
 */
const getInboxStats = asyncHandler(async (req, res) => {
    const filter = {
        user: req.user._id,
    };

    const [
        totalMessages,
        unreadMessages,
        readMessages,
        repliedMessages,
        pendingReplies,
    ] = await Promise.all([
        Contact.countDocuments(filter),

        Contact.countDocuments({
            ...filter,
            status: "unread",
        }),

        Contact.countDocuments({
            ...filter,
            status: "read",
        }),

        Contact.countDocuments({
            ...filter,
            replied: true,
        }),

        Contact.countDocuments({
            ...filter,
            replied: false,
        }),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalMessages,
                unreadMessages,
                readMessages,
                repliedMessages,
                pendingReplies,
            },
            "Inbox statistics fetched successfully"
        )
    );
});

/**
 * @desc    Mark All Messages as Read
 * @route   PUT /api/inbox/read-all
 * @access  Private
 */
const markAllAsRead = asyncHandler(async (req, res) => {
    await Contact.updateMany(
        {
            user: req.user._id,
            status: "unread",
        },
        {
            status: "read",
            readAt: new Date(),
        }
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "All messages marked as read"
        )
    );
});

/**
 * @desc    Bulk Mark as Read
 * @route   PUT /api/inbox/bulk-read
 * @access  Private
 */
const bulkMarkAsRead = asyncHandler(async (req, res) => {
    const { ids } = req.body;

    await Contact.updateMany(
        {
            user: req.user._id,
            _id: { $in: ids },
        },
        {
            status: "read",
            readAt: new Date(),
        }
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Selected messages marked as read"
        )
    );
});

/**
 * @desc    Bulk Delete Messages
 * @route   DELETE /api/inbox/bulk-delete
 * @access  Private
 */
const bulkDeleteMessages = asyncHandler(async (req, res) => {
    const { ids } = req.body;

    await Contact.deleteMany({
        user: req.user._id,
        _id: { $in: ids },
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Selected messages deleted successfully"
        )
    );
});

module.exports = {
    getDashboard,
    getRecentMessages,
    getInboxStats,
    markAllAsRead,
    bulkMarkAsRead,
    bulkDeleteMessages,
};