const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
  async show(req, res) {
    const resolved_token = await jwt.verify(req.token, 'g4m3c0r32oi9');
    const user_new = await User.findByPk(parseInt(resolved_token.id), {
      attributes: ['id', 'name', 'username', 'profile_pic', 'score'],
    });
    res.json({
      cod: 200,
      response: user_new
    })

  }
}