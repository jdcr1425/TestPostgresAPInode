import Sequelize from 'Sequelize';

import {sequelize} from '../database/database';

import  tasks  from "./tasks";

const projects =sequelize.define('projects',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.TEXT
    },
    priority:{
        type:Sequelize.INTEGER
    },
    description:{
        type:Sequelize.TEXT
    },
    deliverydate:{
        type:Sequelize.DATE
    }


},{ timestamps:false});

projects.hasMany(tasks,{foreignKey:'projectId',sourceKey:'id'});

tasks.belongsTo(projects,{foreignKey:'projectId',sourceKey:'id'});

export default projects;