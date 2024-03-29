const Project = require("../models/Project");
const asyncHandler = require("express-async-handler");

/**
 * @Desc Get all projects
 * @Route Get /projects
 * @Access Private
 **/

const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({}).select(["_id", "title", "description", "start_date", "status", "skills"]).populate("skills").lean();

  if (!projects?.length) {
    return res.status(400).json({ message: "No projects found" });
  }
  res.json(projects);
});

module.exports = {
  getAllProjects
};
