const md5 = require('md5')
const mysql = require('mysql');
const crypto = require('crypto')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbgamecore'
});



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
    connection.query(`INSERT INTO imagens (path) VALUES ('${fileName}')`);
    connection.query(`SELECT * FROM imagens where path='${fileName}'`, (err, rows, fields) => {
      const id_fotoperfil = rows[0].id
      connection.query(`INSERT INTO usuario (nome, username, email,senha, id_fotoperfil) VALUES ('${nome}','${user}','${email}','${md5(pwd)}', '${id_fotoperfil}')`);
    });


    res.json({ cod: 201, resultado: 'Usuário cadastrado com sucesso' })
  },
  async verifica(req, res) {
    const { email, pwd } = req.body
    connection.query(`SELECT * from usuario WHERE email='${email}' and senha='${md5(pwd)}'`, function (err, rows, fields) {
      if (err) throw err;
      if (rows.length == 0) {
        res.json({ cod: 401, resultado: 'Login não autorizado' })
      } else {
        const id = rows[0].ID
        var token = crypto.randomBytes(24).toString('hex');
        connection.query(`INSERT INTO tokens (id_user,token, date) VALUES ('${id}', '${token}', '${new Date()}')`)
        res.json({ cod: 200, resultado: token })
      }

    });
  }
}