const express = require("express");
const router = express.Router();

const {
    createSkill,
    getAllSkills,
    updateSkill,
    deleteSkill,
} = require("../controllers/skillController");

const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");
const { imageUpload } = require("../middleware/upload");

const {
    validateObjectId,
} = require("../validators/commonValidator");

const {
    createSkillValidator,
    updateSkillValidator,
} = require("../validators/skillValidator");


// All skill routes require authentication
router.use(protect);


// Get Current User Skills
router.get(
    "/",
    getAllSkills
);


// Create Skill
router.post(
    "/",
    imageUpload.single("icon"),
    createSkillValidator,
    validate,
    createSkill
);


// Update Current User Skill
router.put(
    "/:id",
    validateObjectId("id"),
    imageUpload.single("icon"),
    updateSkillValidator,
    validate,
    updateSkill
);


// Delete Current User Skill
router.delete(
    "/:id",
    validateObjectId("id"),
    validate,
    deleteSkill
);


module.exports = router;