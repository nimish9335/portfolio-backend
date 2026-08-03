const express = require("express");
const router = express.Router();

const {
    createSocialLink,
    getAllSocialLinks,
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

const {
    validateObjectId,
} = require("../validators/commonValidator");

// All social link routes require authentication
router.use(protect);

// Get Current User Social Links
router.get(
    "/",
    getAllSocialLinks
);

// Create Social Link
router.post(
    "/",
    createSocialLinkValidator,
    validate,
    createSocialLink
);

// Get Social Link By ID
router.get(
    "/:id",
    validateObjectId("id"),
    validate,
    getSocialLinkById
);

// Update Social Link
router.put(
    "/:id",
    validateObjectId("id"),
    updateSocialLinkValidator,
    validate,
    updateSocialLink
);

// Delete Social Link
router.delete(
    "/:id",
    validateObjectId("id"),
    validate,
    deleteSocialLink
);

module.exports = router;