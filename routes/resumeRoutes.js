const express = require("express");

const {
    createResume,
    getResume,
    updateResume,
    deleteResume,
} = require("../controllers/resumeController");

const {protect} = require("../middleware/authMiddleware");
const { pdfUpload } = require("../middleware/upload");
const validate = require("../middleware/validate");

const {
    createResumeValidator,
    updateResumeValidator,
} = require("../validators/resumeValidator");

const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();

// Public Route
router.get("/", getResume);

// Admin Routes
router.post(
    "/",
    protect,
    pdfUpload.single("resume"),
    createResumeValidator,
    validate,
    createResume
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    pdfUpload.single("resume"),
    updateResumeValidator,
    validate,
    updateResume
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteResume
);

module.exports = router;