const Spot = require('../models/Spot');


module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const spots = await Spot.findById({ user: user_id });

    return res.json(spots);
  }
}