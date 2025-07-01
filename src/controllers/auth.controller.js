const { User } = require('../models');
const bcrypt = require('bcryptjs');
const { generateToken, generateRefreshToken } = require('../utils/jwt');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash, role });
    res.status(201).json({ message: 'Usuario registrado', user: { id: user.id, username: user.username, role: user.role } });
  } catch (err) {
    res.status(400).json({ message: 'Error al registrar usuario', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    res.json({ token, refreshToken });
  } catch (err) {
    res.status(400).json({ message: 'Error al iniciar sesión', error: err.message });
  }
};

exports.refreshToken = (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'Refresh token requerido' });
  jwt.verify(refreshToken, config.jwtRefreshSecret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Refresh token inválido' });
    const newToken = generateToken(user);
    res.json({ token: newToken });
  });
}; 