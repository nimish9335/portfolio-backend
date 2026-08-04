const express = require("express");

const {
    createBlog,
    getBlogs,
    getAdminBlogs,
    getBlogBySlug,
    updateBlog,
    deleteBlog,
} = require("../controllers/blogController");

const { protect } = require("../middleware/authMiddleware");
const { imageUpload } = require("../middleware/upload");
const validate = require("../middleware/validate");

const { blogValidator } = require("../validators/blogValidator");
const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();


/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Admin blogs
router.get("/admin/all", protect, getAdminBlogs);

// Create
router.post(
    "/",
    protect,
    imageUpload.single("featuredImage"),
    blogValidator,
    validate,
    createBlog
);

// Update
router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    imageUpload.single("featuredImage"),
    blogValidator,
    validate,
    updateBlog
);

// Delete
router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteBlog
);

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Public blogs of a portfolio
router.get("/:username", getBlogs);

// Single public blog
router.get("/:username/:slug", getBlogBySlug);

module.exports = router;