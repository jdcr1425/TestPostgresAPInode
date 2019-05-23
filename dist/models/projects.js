"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Sequelize = _interopRequireDefault(require("Sequelize"));

var _database = require("../database/database");

var _tasks = _interopRequireDefault(require("./tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var projects = _database.sequelize.define('projects', {
  id: {
    type: _Sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _Sequelize["default"].TEXT
  },
  priority: {
    type: _Sequelize["default"].INTEGER
  },
  description: {
    type: _Sequelize["default"].TEXT
  },
  deliverydate: {
    type: _Sequelize["default"].DATE
  }
}, {
  timestamps: false
});

projects.hasMany(_tasks["default"], {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

_tasks["default"].belongsTo(projects, {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

var _default = projects;
exports["default"] = _default;