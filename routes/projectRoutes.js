const express = require("express");
const router = express.Router();
const { createProject,getAllProjects, getProjectById,updateProject,deleteProject,} = require("../controllers/projectController");
const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");
const {createProjectValidator,} = require("../validators/projectValidator");
const {validateObjectId,} = require("../validators/commonValidator");

router.post("/",protect,createProjectValidator,validate,createProject);
router.get("/", getAllProjects);
router.get("/:id",validateObjectId(),validate,getProjectById);
router.put("/:id",protect,validateObjectId(),createProjectValidator,validate,updateProject);
router.delete("/:id",protect,validateObjectId(),validate,deleteProject);

module.exports = router;