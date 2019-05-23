"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = require("../database/database");

var tasks = _database.sequelize.define('tasks', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.Sequelize.TEXT
  },
  projectid: {
    type: _sequelize.Sequelize.INTEGER
  },
  done: {
    type: _sequelize.Sequelize.BOOLEAN
  }
}, {
  timestamps: false
});

var _default = tasks;
exports["default"] = _default;