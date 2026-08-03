const express = require("express");
const router = express.Router();

const {
    createResume,
    getResume,
    updateResume,
    deleteResume,
} = require("../controllers/resumeController");

const { protect } = require("../middleware/authMiddleware");
const { pdfUpload } = require("../middleware/upload");
const validate = require("../middleware/validate");

const {
    createResumeValidator,
    updateResumeValidator,
} = require("../validators/resumeValidator");

const {
    validateObjectId,
} = require("../validators/commonValidator");

// All resume routes require authentication
router.use(protect);

// Get Current User Resume
router.get(
    "/",
    getResume
);

// Upload Resume
router.post(
    "/",
    pdfUpload.single("resume"),
    createResumeValidator,
    validate,
    createResume
);

// Update Resume
router.put(
    "/:id",
    validateObjectId("id"),
    pdfUpload.single("resume"),
    updateResumeValidator,
    validate,
    updateResume
);

// Delete Resume
router.delete(
    "/:id",
    validateObjectId("id"),
    validate,
    deleteResume
);

module.exports = router;