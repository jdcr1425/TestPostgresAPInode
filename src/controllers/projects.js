import projects from "../models/projects";
export async function createProject(req, res) {
  const { name, priority, description, deliverydate } = req.body;

  try {
    let newproject = await projects.create(
      {
        name,
        priority,
        description,
        deliverydate
      },
      {
        fields: ["name", "priority", "description", "deliverydate"]
      }
    );

    if (newproject) {
      return res.json({
        message: "Project created succesfully",
        data: newproject
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something was wrong",
      data: {}
    });
  }
}

export async function getProjects(req,res){
    const Projects = await projects.findAll();

    res.json({
        data:Projects
    })
}


