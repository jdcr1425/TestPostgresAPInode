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

export async function getProjects(req, res) {
  try {
    const Projects = await projects.findAll();

    res.json({
      data: Projects
    });
  } catch (error) {
      console.log(error);
  }
}

export async function getOneProject(req, res){
    const {id} = req.params;
   const project = await projects.findOne({where:{
        id
    }});

    res.json({
        project
    })
}

export async function deleteProject(req, res){
    const {id} = req.params;
    const deleteRowCount =await projects.destroy({
        where:{
            id
        }
    });

    res.json({
        message: 'Project deleted succesfully',
        count:deleteRowCount
    })
}

export async function updateProject(req, res){
    const {id} = req.params;
    const {name, priority, description, deliverydate} = req.body;



    const pro = await projects.findAll({
        attributes:['id','name','priority','description','deliverydate'],
        where:{
            id:id
        }
    });

    console.log(pro);
    if(pro.length>0){
        pro.forEach(async project => {
            await project.update({
                name, priority,description,deliverydate
            })
        });
    }

    res.json({
        message:"Project updated succesfully",
        project:pro
    })

    
}
