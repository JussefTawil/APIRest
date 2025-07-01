const jwt = require('jsonwebtoken');
const config = require('../config');

function generateToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, { expiresIn: '15m' });
}
function generateRefreshToken(user) {
  return jwt.sign({ id: user.id }, config.jwtRefreshSecret, { expiresIn: '7d' });
}
module.exports = { generateToken, generateRefreshToken }; 