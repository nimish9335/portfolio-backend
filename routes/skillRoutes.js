const express = require("express");
const {createSkill,getAllSkills,getAdminSkills,updateSkill,deleteSkill,} = require("../controllers/skillController");
const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");
const upload = require("../middleware/upload");
const { validateObjectId } = require("../validators/commonValidator");
const {createSkillValidator,updateSkillValidator,} = require("../validators/skillValidator");
const router = express.Router();

// Public Route
router.get("/", getAllSkills);
// Admin Routes
router.get("/admin", protect, getAdminSkills);
router.post("/",protect,upload.single("icon"),createSkillValidator,validate,createSkill);
router.put("/:id",protect,validateObjectId("id"),upload.single("icon"),updateSkillValidator,validate,updateSkill);
router.delete("/:id",protect,validateObjectId("id"),validate,deleteSkill);

module.exports = router;