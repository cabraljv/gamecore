const User = require('../models/User');
const jwt = require('jsonwebtoken')

module.exports = {
  async show(req, res) {
    const resolved_token = await jwt.verify(req.token, 'g4m3c0r32oi9');
    const user = User.findByPk(resolved_token.id);

  }
}