const express = require("express");
const router = express.Router();

const {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
} = require("../controllers/projectController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

const {
    createProjectValidator,
} = require("../validators/projectValidator");

const {
    validateObjectId,
} = require("../validators/commonValidator");

const { imageUpload } = require("../middleware/upload");


// All project routes require authentication
router.use(protect);


// Create Project
router.post(
    "/",
    imageUpload.single("thumbnail"),
    createProjectValidator,
    validate,
    createProject
);


// Get Current User Projects
router.get(
    "/",
    getAllProjects
);


// Get Current User Project By ID
router.get(
    "/:id",
    validateObjectId(),
    validate,
    getProjectById
);


// Update Current User Project
router.put(
    "/:id",
    imageUpload.single("thumbnail"),
    validateObjectId(),
    createProjectValidator,
    validate,
    updateProject
);


// Delete Current User Project
router.delete(
    "/:id",
    validateObjectId(),
    validate,
    deleteProject
);


module.exports = router;