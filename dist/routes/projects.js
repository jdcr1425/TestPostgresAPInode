"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _projects = require("../controllers/projects");

var router = (0, _express.Router)(); // /api/projects/

router.post('/', _projects.createProject);
router.get('/', _projects.getProjects); // /api/projects/projectId

router.get('/:id', _projects.getOneProject);
router["delete"]('/:id', _projects.deleteProject);
router.put('/:id', _projects.updateProject);
var _default = router;
exports["default"] = _default;