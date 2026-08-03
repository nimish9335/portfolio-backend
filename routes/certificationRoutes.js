const express = require("express");
const router = express.Router();

const {
    createCertification,
    getAllCertifications,
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

const {
    validateObjectId,
} = require("../validators/commonValidator");


// All certification routes require authentication
router.use(protect);


// Get Current User Certifications
router.get(
    "/",
    getAllCertifications
);


// Create Certification
router.post(
    "/",
    createCertificationValidator,
    validate,
    createCertification
);


// Get Certification By ID
router.get(
    "/:id",
    validateObjectId("id"),
    validate,
    getCertificationById
);


// Update Certification
router.put(
    "/:id",
    validateObjectId("id"),
    updateCertificationValidator,
    validate,
    updateCertification
);


// Delete Certification
router.delete(
    "/:id",
    validateObjectId("id"),
    validate,
    deleteCertification
);

module.exports = router;