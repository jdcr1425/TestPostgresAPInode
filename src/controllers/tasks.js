import Task from "../models/tasks";
export async function createTask(req, res) {
  const { name, done, projectid } = req.body;

  const task = await Task.create(
    {
      name,
      done,
      projectid
    },
    {
      fields: ["name", "done", "projectid"]
    }
  );

  res.json({
    message: "Task created successfully",
    data: task
  });
}

export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll();
    console.log(tasks);
    if (tasks) {
      res.json({
        tasks
      });
    } else {
      res.json({ message: "No tasks found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { name, done, projectid } = req.body;

  const task = await Task.findOne({
    where: {
      id: id
    }
  });

  const updated = await task.update(
    {
      name,
      done,
      projectid
    },
    {
      where: { id }
    }
  );

  res.json({message:"updated", updated})
}

export async function deleteTask(req, res) {
  const { id } = req.params;

  const deleteRowCount = await Task.destroy({
    where: {
      id: id
    }
  });

  res.json({
    message: "Task deleted succesfully",
    count: deleteRowCount
  });
}

export async function getOneTask(req, res) {
  const { id } = req.params;

  const tasks = await Task.findOne({
    where: {
      id: id
    }
  });

  res.json({
    tasks
  });
}

export async function getTaskByProject(req, res) {
  const { id } = req.params;

  const taskByProId = await Task.findAll({
    where: {
      projectid: id
    }
  });

  res.json(taskByProId);
}
