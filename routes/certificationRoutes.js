const express = require("express");

const {
    createCertification,
    getAllCertifications,
    getAdminCertifications,
    getCertificationById,
    updateCertification,
    deleteCertification,
} = require("../controllers/certificationController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createCertificationValidator,
    updateCertificationValidator,
} = require("../validators/certificationValidator");

const { validateObjectId } = require("../validators/commonValidator");

const router = express.Router();

// Public Routes
router.get("/", getAllCertifications);

// Admin Route (Must be before /:id)
router.get("/admin", protect, getAdminCertifications);

// Public Route
router.get("/:id", validateObjectId("id"), validate, getCertificationById);

// Protected Routes
router.post(
    "/",
    protect,
    createCertificationValidator,
    validate,
    createCertification
);

router.put(
    "/:id",
    protect,
    validateObjectId("id"),
    updateCertificationValidator,
    validate,
    updateCertification
);

router.delete(
    "/:id",
    protect,
    validateObjectId("id"),
    validate,
    deleteCertification
);

module.exports = router;