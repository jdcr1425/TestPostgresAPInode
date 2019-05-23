"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();
router.post('/', _tasks.createTask);
router.get('/', _tasks.getTasks);
router.get('/:id', _tasks.getOneTask);
router.put('/:id', _tasks.updateTask);
router["delete"]('/:id', _tasks.deleteTask);
router.get('/project/:id', _tasks.getTaskByProject);
var _default = router;
exports["default"] = _default;