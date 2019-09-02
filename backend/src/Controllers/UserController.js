const md5 = require('md5')
const crypto = require('crypto')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const Imagem = require('../models/Imagem')
const Usuario = require('../models/User')


module.exports = {
  async insert(req, res) {
    const { user, pwd, nome, email } = req.body
    const { filename: image } = req.file;

    const [name] = image.split('.');
    var fileName = `${crypto.randomBytes(12).toString('hex')}.jpg`;
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(req.file.destination, 'resized', fileName));

    fs.unlinkSync(req.file.path);
    const img = await Imagem.create({ path: fileName })
    await Usuario.create({ username: user, senha: md5(pwd), nome, email, id_fotoperfil: img.id })



    res.json({ cod: 201, resultado: 'Usuário cadastrado com sucesso' })
  },
  async index(req, res) {
    const { email, pwd } = req.body
    const user = Usuario.findOne({ where: { email, senha: md5(pwd) } })
    if (user) {
      res.json({ cod: 200, resultado: token })
    } else {
      res.json({ cod: 401, resultado: 'Login não autorizado' })
    }

  }
}