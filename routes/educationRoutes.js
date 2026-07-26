const express = require("express");
const router = express.Router();

const {
    createEducation,
    getAllEducation,
    getEducationById,
    updateEducation,
    deleteEducation,
} = require("../controllers/educationController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createEducationValidator,
    updateEducationValidator,
} = require("../validators/educationValidator");

const {
    validateObjectId,
} = require("../validators/commonValidator");


// All education routes require authentication
router.use(protect);


// Get Current User Education
router.get(
    "/",
    getAllEducation
);


// Create Education
router.post(
    "/",
    createEducationValidator,
    validate,
    createEducation
);


// Get Current User Education By ID
router.get(
    "/:id",
    validateObjectId("id"),
    validate,
    getEducationById
);


// Update Current User Education
router.put(
    "/:id",
    validateObjectId("id"),
    updateEducationValidator,
    validate,
    updateEducation
);


// Delete Current User Education
router.delete(
    "/:id",
    validateObjectId("id"),
    validate,
    deleteEducation
);


module.exports = router;