const express = require("express");

const {
    createSocialLink,
    getAllSocialLinks,
    getAdminSocialLinks,
    getSocialLinkById,
    updateSocialLink,
    deleteSocialLink,
} = require("../controllers/socialLinkController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createSocialLinkValidator,
    updateSocialLinkValidator,
} = require("../validators/socialLinkValidator");

const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();

// Public Routes
router.get("/", getAllSocialLinks);

// Admin Routes
router.get("/admin", protect, getAdminSocialLinks);

router.get(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    getSocialLinkById
);

router.post(
    "/",
    protect,
    createSocialLinkValidator,
    validate,
    createSocialLink
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    updateSocialLinkValidator,
    validate,
    updateSocialLink
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteSocialLink
);

module.exports = router;