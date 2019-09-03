const crypto = require('crypto')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const Imagem = require('../models/Imagem')
const Destaque = require('../models/Destaque')

module.exports = {
  async index(req, res) {

    const destaques = await Destaque.findAll()
    var result = []
    await destaques.map(async a => {

      const imagePath = await Imagem.findByPk(a.dataValues.id_img)

      const capaPath = await Imagem.findByPk(a.dataValues.id_capa)


      const b = {
        id: a.dataValues.id,
        titulo: a.dataValues.titulo,
        descricao: a.dataValues.descricao,
        capa: capaPath.dataValues.path,
        imagem: imagePath.dataValues.path,
      }
      await result.push(b)
      if (result.length === destaques.length) {
        return res.json({ cod: 200, resultado: result })
      }

    })


  },
  async store(req, res) {
    const { titulo, descricao } = req.body
    const { capa, img } = req.files

    var capaName = `${crypto.randomBytes(12).toString('hex')}.jpg`;
    await sharp(capa[0].path)
      .resize(1000)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(capa[0].destination, 'resized', capaName));

    fs.unlinkSync(capa[0].path);

    const capaUp = await Imagem.create({ path: capaName })

    var imgName = `${crypto.randomBytes(12).toString('hex')}.jpg`;
    await sharp(img[0].path)
      .resize(1000)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(img[0].destination, 'resized', imgName));

    fs.unlinkSync(img[0].path);

    const imgUp = await Imagem.create({ path: imgName })

    await Destaque.create({ titulo, descricao, id_capa: capaUp.id, id_img: imgUp.id })
    res.json({ cod: 201 })
  },
  delete(req, res) {

  }
}