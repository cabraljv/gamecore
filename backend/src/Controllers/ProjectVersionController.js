
const ProjectVersion = require('../models/ProjectVersion')
const Project = require('../models/Project')
const jwt = require('jsonwebtoken');
module.exports = {
  async store(req, res) {
    const { version, description,id_project } = req.body  
    try{
      const user = await jwt.verify(req.token, 'g4m3c0r32oi9');
      const projectUsed = await Project.findAll({
          where:{ 
            user_id: user.id,
            }
        });
      console.log(projectUsed[0].user_id)
      if(projectUsed[0].user_id===user.id){
        await ProjectVersion.create({ version, description, id_project})
        res.json({cod: 201, response:"Version created"})
      }else{
        res.json({cod: 401, response:"invalid token"})
      }
      
      
    }catch(err){
      res.json({cod: 401, response:err.message})
    }
    

  },
  async index(req, res) {
    
  }
}