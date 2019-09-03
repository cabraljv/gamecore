const crypto = require('crypto')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const Imagem = require('../models/Imagem')
const Post = require('../models/Post')
const Token = require('../models/Token')


module.exports = {
  async insert(req, res) {
    const { token, titulo, descricao, tipodojogo } = req.body

    var fileName = `${crypto.randomBytes(12).toString('hex')}.jpg`;
    await sharp(req.file.path)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(req.file.destination, 'resized', fileName));

    fs.unlinkSync(req.file.path);
    await Imagem.create({ path: fileName })
    const token2 = await Token.findOne({ where: { token } })
    const image = await Imagem.findOne({ where: { path: fileName } })
    if (token2 !== null) {
      await Post.create({ tipodojogo, descricao, titulo, id_capa: image.dataValues.id, id_user: token2.dataValues.id_user })
      console.log('Usuário adicionado com sucesso')
      return res.json({ cod: 201, resultado: "Adicionado com sucesso" })
    } else {
      return res.json({ cod: 300, resultado: "Token inválido" })
    }


  },
  index(req, res) {

  }
}