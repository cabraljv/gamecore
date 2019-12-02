const User = require('../models/User')
module.exports = {
  async index(req, res) {
    const top_dev = await User.findAll({
      order: [
        ['score', 'DESC'],
      ],
      attributes: ['id', 'profile_pic', 'name', 'score'],
      limit: 5,
    });
    if (top_dev.error) {
      res.json({ cod: 400, response: "Error" })
    }

    res.json({ cod: 200, response: top_dev })
  }
}