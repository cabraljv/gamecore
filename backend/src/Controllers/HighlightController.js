const Highlight = require('../models/Highlight')

module.exports = {
  async index(req, res) {

    const highlights = await Highlight.findAll()
    var result = []
    for (let i = 0; i < highlights.length; i++) {
      result = [...result, highlights[i].dataValues]
    }
    res.json(result)
  },
  async store(req, res) {
    console.log('aa')
    const { title, description, passwd } = req.body
    const { cover_img, project_img } = req.files
    if (passwd === 'senhafodona123') {
      console.log(description)
      console.log(title)
      await Highlight.create({ title, description, cover_img: cover_img[0].path, project_img: project_img[0].path })
      res.json({ cod: 201, response: "Highlight created" })
    } else {
      res.json({ cod: 401 })
    }

  },
  delete(req, res) {
  }
}