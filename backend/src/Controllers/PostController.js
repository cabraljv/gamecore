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
    const { token, nome, tipo, descricao } = req.body
    console.log(req.body)
    const { filename: image } = req.file;

    const [name] = image.split('.');
    var fileName = `${crypto.randomBytes(12).toString('hex')}.jpg`;
    await sharp(req.file.path)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(req.file.destination, 'resized', fileName));

    fs.unlinkSync(req.file.path);
    connection.query(`INSERT INTO imagens (path) VALUES ('${fileName}')`);
    connection.query(`SELECT * FROM imagens where path='${fileName}'`, (err, rows, fields) => {
      const id_pic = rows[0].id
      connection.query(`SELECT * FROM tokens where token='${token}'`, (err, rows, fields) => {
        if (rows.length > 0) {
          const id_user = rows[0].id
          connection.query(`INSERT INTO projeto (nome, tipodojogo, id_capa, id_user,descricao) VALUES ('${nome}','${tipo}','${id_pic}','${id_user}','${descricao}')`);
          res.json({ cod: 201, resultado: 'Adicionado com sucesso' })
        } else {
          res.json({ cod: 300, resultado: 'Token inválido' })
        }
      })
    });
  },
  alter(req, res) {

  }
}