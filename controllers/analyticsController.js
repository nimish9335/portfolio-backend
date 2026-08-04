const Visitor = require("../models/Visitor");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const getOverview = asyncHandler(async (req, res) => {
    const now = new Date();

    const startOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const startOfWeek = new Date(startOfToday);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const startOfMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
    );

    const filter = {
        user: req.user._id,
    };

    const [
        totalVisitors,
        todayVisitors,
        weekVisitors,
        monthVisitors,
        totalPageViews,
    ] = await Promise.all([
        Visitor.countDocuments(filter),

        Visitor.countDocuments({
            ...filter,
            visitedAt: { $gte: startOfToday },
        }),

        Visitor.countDocuments({
            ...filter,
            visitedAt: { $gte: startOfWeek },
        }),

        Visitor.countDocuments({
            ...filter,
            visitedAt: { $gte: startOfMonth },
        }),

        Visitor.countDocuments(filter),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                totalVisitors,
                todayVisitors,
                weekVisitors,
                monthVisitors,
                totalPageViews,
            },
            "Analytics overview fetched successfully"
        )
    );
});

const getPageAnalytics = asyncHandler(async (req, res) => {
    const pages = await Visitor.aggregate([
        {
            $match: {
                user: req.user._id,
            },
        },
        {
            $group: {
                _id: "$page",
                visits: { $sum: 1 },
            },
        },
        {
            $sort: {
                visits: -1,
            },
        },
        {
            $project: {
                _id: 0,
                page: "$_id",
                visits: 1,
            },
        },
        {
            $limit: 10,
        },
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            pages,
            "Page analytics fetched successfully"
        )
    );
});

const getDeviceAnalytics = asyncHandler(async (req, res) => {
    const devices = await Visitor.aggregate([
        {
            $match: {
                user: req.user._id,
            },
        },
        {
            $group: {
                _id: "$device",
                visits: { $sum: 1 },
            },
        },
        {
            $sort: {
                visits: -1,
            },
        },
        {
            $project: {
                _id: 0,
                device: "$_id",
                visits: 1,
            },
        },
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            devices,
            "Device analytics fetched successfully"
        )
    );
});

const getBrowserAnalytics = asyncHandler(async (req, res) => {
    const browsers = await Visitor.aggregate([
        {
            $match: {
                user: req.user._id,
            },
        },
        {
            $group: {
                _id: "$browser",
                visits: { $sum: 1 },
            },
        },
        {
            $sort: {
                visits: -1,
            },
        },
        {
            $project: {
                _id: 0,
                browser: "$_id",
                visits: 1,
            },
        },
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            browsers,
            "Browser analytics fetched successfully"
        )
    );
});

const getCountryAnalytics = asyncHandler(async (req, res) => {
    const countries = await Visitor.aggregate([
        {
            $match: {
                user: req.user._id,
            },
        },
        {
            $group: {
                _id: "$country",
                visits: { $sum: 1 },
            },
        },
        {
            $sort: {
                visits: -1,
            },
        },
        {
            $project: {
                _id: 0,
                country: "$_id",
                visits: 1,
            },
        },
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            countries,
            "Country analytics fetched successfully"
        )
    );
});

const getOSAnalytics = asyncHandler(async (req, res) => {
    const operatingSystems = await Visitor.aggregate([
        {
            $match: {
                user: req.user._id,
            },
        },
        {
            $group: {
                _id: "$os",
                visits: { $sum: 1 },
            },
        },
        {
            $sort: {
                visits: -1,
            },
        },
        {
            $project: {
                _id: 0,
                os: "$_id",
                visits: 1,
            },
        },
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            operatingSystems,
            "Operating system analytics fetched successfully"
        )
    );
});

const getDailyAnalytics = asyncHandler(async (req, res) => {
    const dailyVisitors = await Visitor.aggregate([
        {
            $match: {
                user: req.user._id,
            },
        },
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m-%d",
                        date: "$visitedAt",
                    },
                },
                visits: { $sum: 1 },
            },
        },
        {
            $sort: {
                _id: 1,
            },
        },
        {
            $project: {
                _id: 0,
                date: "$_id",
                visits: 1,
            },
        },
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            dailyVisitors,
            "Daily analytics fetched successfully"
        )
    );
});

module.exports = {
    getOverview,
    getPageAnalytics,
    getDeviceAnalytics,
    getBrowserAnalytics,
    getCountryAnalytics,
    getOSAnalytics,
    getDailyAnalytics,
};