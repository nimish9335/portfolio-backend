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
| Public Routes
|--------------------------------------------------------------------------
*/

router.get("/", getBlogs);

router.get("/admin/all", protect, getAdminBlogs);

router.get("/:slug", getBlogBySlug);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

router.post(
    "/",
    protect,
    imageUpload.single("featuredImage"),
    blogValidator,
    validate,
    createBlog
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    imageUpload.single("featuredImage"),
    blogValidator,
    validate,
    updateBlog
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteBlog
);

module.exports = router;