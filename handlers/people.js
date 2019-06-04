const profile = require('../data/people/christhopher_lion/profile.json');
const social = require('../data/people/christhopher_lion/social.json');

const lion = {
  profile,
  social,
};

exports.profile = (req, res) => res.json(lion.profile);
exports.social = (req, res) => res.json(lion.social);
