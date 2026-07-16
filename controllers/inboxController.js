const Contact = require("../models/Contact");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

/**
 * @desc    Dashboard Summary
 * @route   GET /api/inbox/dashboard
 * @access  Private
 */
const getDashboard = asyncHandler(async (req, res) => {
    const [
        totalMessages,
        unreadMessages,
        readMessages,
        repliedMessages,
        pendingReplies,
        recentMessages,
    ] = await Promise.all([
        Contact.countDocuments(),
        Contact.countDocuments({ status: "unread" }),
        Contact.countDocuments({ status: "read" }),
        Contact.countDocuments({ replied: true }),
        Contact.countDocuments({ replied: false }),
        Contact.find()
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
    const messages = await Contact.find()
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
    const [
        totalMessages,
        unreadMessages,
        readMessages,
        repliedMessages,
        pendingReplies,
    ] = await Promise.all([
        Contact.countDocuments(),
        Contact.countDocuments({ status: "unread" }),
        Contact.countDocuments({ status: "read" }),
        Contact.countDocuments({ replied: true }),
        Contact.countDocuments({ replied: false }),
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