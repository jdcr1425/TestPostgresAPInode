import Task from "../models/tasks";
export async function createTask(req, res) {
  const { name, done, projectid } = req.body;

  const task = await Task.create({
    name,
    done,
    projectid
  }, {
      fields: ['name','done','projectid']
  });

  res.json({
      message:"Task created successfully",
      data:task
  })
}

export async function getTasks(req, res) {

    try {
        const tasks = await Task.findAll();
        console.log(tasks);
        if(tasks){
            res.json({
                tasks
            })
        }else{
            res.json({message:"No tasks found"});
        }
    } catch (error) {
        res.status(500).json({message:error});
        
    }

}

export function updateTask(req, res) {}

export function deleteTask(req, res) {}

export function getOneTask(req, res) {}

export function getTaskByProject(req, res) {}
