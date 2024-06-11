const express = require("express");
const router = express.Router();

const Project = require("../models/project");
const Course = require("../models/course");

router.get("/", async (req, res, next) => {
    let projects = await Project.find().sort([["dueDate", "descending"]]);
    res.render("projects/index", { 
        title: "Project Tracker",
        dataset: projects
    })
});

router.get('/add', async (req, res, next) => {
	let courseList = await Course.find().sort([["name", "ascending"]]);
    res.render('projects/add', { title: 'Add a New Project', courses: courseList });
});

router.post('/add', async (req, res, next) => {
    let newProject = new Project({
        name: req.body.name,
        dueDate: req.body.dueDate,
        course: req.body.course
    });
    await newProject.save();
    res.redirect('/projects');
});

router.get('/edit/:id', async (req, res, next) => {
	let projectData = await Project.findById(req.params._id);
	let courseList = await Course.find().sort([["name", "ascending"]]);
	res.render('projects/edit', { title: 'Edit Project', project: projectData, courses: courseList });
});

router.post('/edit/:id', async (req, res, next) => {
	let projectId = req.params._id;
	let project = await Project.findByIdAndUpdate (
		{_id: projectId},
		{
			name: req.body.name,
			dueDate: req.body.dueDate,
			course: req.body.course,
			status: req.body.status
		},
	);
	res.redirect('/projects');
});

router.get('/delete/:id', async (req, res, next) => {
	let projectId = req.params.id;
	await Project.deleteOne({_id: projectId});
	res.redirect('/projects');
});

module.exports = router;