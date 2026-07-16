const Blog = require("../models/Blog");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const cloudinary = require("../services/cloudinary");

/**
 * Calculate Read Time
 */
const calculateReadTime = (content) => {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
};

/**
 * Create Blog
 */
const createBlog = asyncHandler(async (req, res) => {
    const {
        title,
        slug,
        excerpt,
        content,
        category,
        tags,
        status,
        isFeatured,
        seoTitle,
        seoDescription,
    } = req.body;

    const exists = await Blog.findOne({ slug });

    if (exists) {
        throw new ApiError(400, "Slug already exists");
    }

    let featuredImage = {};

    if (req.file) {
        const result = await cloudinary.uploadImage(
            req.file.buffer,
            "portfolio/blogs"
        );

        featuredImage = {
            url: result.secure_url,
            public_id: result.public_id,
        };
    }

    const blog = await Blog.create({
        title,
        slug,
        excerpt,
        content,
        featuredImage,
        category,
        tags,
        status,
        isFeatured,
        seoTitle,
        seoDescription,
        readTime: calculateReadTime(content),
        publishedAt: status === "published" ? new Date() : null,
    });

    return res.status(201).json(
        new ApiResponse(201, blog, "Blog created successfully")
    );
});

/**
 * Public Blogs
 */
const getBlogs = asyncHandler(async (req, res) => {
    const {
        page = 1,
        limit = 10,
        category,
        search,
        tag,
    } = req.query;

    const filter = {
        status: "published",
    };

    if (category) filter.category = category;

    if (tag) filter.tags = tag;

    if (search) {
        filter.$text = {
            $search: search,
        };
    }

    const blogs = await Blog.find(filter)
        .sort({ publishedAt: -1 })
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .lean();

    const total = await Blog.countDocuments(filter);

    return res.json(
        new ApiResponse(
            200,
            {
                total,
                page: Number(page),
                pages: Math.ceil(total / limit),
                blogs,
            },
            "Blogs fetched successfully"
        )
    );
});

/**
 * Admin Blogs
 */
const getAdminBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find()
        .sort({ createdAt: -1 });

    return res.json(
        new ApiResponse(
            200,
            blogs,
            "Admin blogs fetched successfully"
        )
    );
});

/**
 * Get Blog By Slug
 */
const getBlogBySlug = asyncHandler(async (req, res) => {

    const blog = await Blog.findOne({
        slug: req.params.slug,
        status: "published",
    });

    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }

    blog.views += 1;
    await blog.save();

    return res.json(
        new ApiResponse(
            200,
            blog,
            "Blog fetched successfully"
        )
    );
});

/**
 * Update Blog
 */
const updateBlog = asyncHandler(async (req, res) => {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }

    if (req.file) {

        if (blog.featuredImage?.public_id) {
            await cloudinary.deleteImage(blog.featuredImage.public_id);
        }

        const uploaded = await cloudinary.uploadImage(
            req.file.buffer,
            "portfolio/blogs"
        );

        blog.featuredImage = {
            url: uploaded.secure_url,
            public_id: uploaded.public_id,
        };
    }

    Object.assign(blog, req.body);

    blog.readTime = calculateReadTime(blog.content);

    if (
        blog.status === "published" &&
        !blog.publishedAt
    ) {
        blog.publishedAt = new Date();
    }

    await blog.save();

    return res.json(
        new ApiResponse(
            200,
            blog,
            "Blog updated successfully"
        )
    );
});

/**
 * Delete Blog
 */
const deleteBlog = asyncHandler(async (req, res) => {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        throw new ApiError(404, "Blog not found");
    }

    if (blog.featuredImage?.public_id) {
        await cloudinary.deleteImage(
            blog.featuredImage.public_id
        );
    }

    await blog.deleteOne();

    return res.json(
        new ApiResponse(
            200,
            null,
            "Blog deleted successfully"
        )
    );
});

module.exports = {
    createBlog,
    getBlogs,
    getAdminBlogs,
    getBlogBySlug,
    updateBlog,
    deleteBlog,
};