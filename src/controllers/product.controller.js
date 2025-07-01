const { Product } = require('../models');

exports.getAll = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.getById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(product);
};

exports.create = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.update = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  await product.update(req.body);
  res.json(product);
};

exports.delete = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  await product.destroy();
  res.json({ message: 'Producto eliminado' });
}; 