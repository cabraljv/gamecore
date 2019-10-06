const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbgamecore'
});

module.exports = {
  async store(req, res) {
    const { conteudo, id_post, token } = req.body
    connection.query(`SELECT * FROM tokens where token='${token}'`, (err, rows, fields) => {
      if (rows.length > 0) {
        const id_user = rows[0].id
        connection.query(`INSERT INTO comentario (conteudo, id_user, id_post) VALUES ('${conteudo}','${id_user}','${id_post}')`);
        res.json({ cod: 201, resultado: 'Adicionado com sucesso' })
      } else {
        res.json({ cod: 300, resultado: 'Token inválido' })
      }
    })
  }
}