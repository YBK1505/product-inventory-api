const { v4: uuidv4 } = require('uuid');
const store = require('../data/store');

/**
 * GET /api/products
 * Optional query params: ?category=Electronics&inStock=true
 */
function getAll(req, res) {
  let products = [...store.products];

  if (req.query.category) {
    products = products.filter(
      (p) => p.category.toLowerCase() === req.query.category.toLowerCase()
    );
  }

  if (req.query.inStock === 'true') {
    products = products.filter((p) => p.stock > 0);
  }

  res.json({ success: true, count: products.length, data: products });
}

/**
 * GET /api/products/:id
 */
function getOne(req, res) {
  const product = store.products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found.' });
  }
  res.json({ success: true, data: product });
}

/**
 * POST /api/products
 */
function create(req, res) {
  const { name, sku, price, stock, category, description } = req.body;

  const skuExists = store.products.find((p) => p.sku === sku);
  if (skuExists) {
    return res.status(409).json({ success: false, message: 'SKU already exists.' });
  }

  const product = {
    id: uuidv4(),
    name,
    sku,
    price: parseFloat(price),
    stock: parseInt(stock, 10),
    category,
    description: description || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  store.products.push(product);
  res.status(201).json({ success: true, message: 'Product created.', data: product });
}

/**
 * PUT /api/products/:id
 */
function update(req, res) {
  const index = store.products.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Product not found.' });
  }

  const updatable = ['name', 'price', 'stock', 'category', 'description'];
  updatable.forEach((field) => {
    if (req.body[field] !== undefined) {
      store.products[index][field] = req.body[field];
    }
  });
  store.products[index].updatedAt = new Date().toISOString();

  res.json({ success: true, message: 'Product updated.', data: store.products[index] });
}

/**
 * DELETE /api/products/:id
 */
function remove(req, res) {
  const index = store.products.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Product not found.' });
  }

  store.products.splice(index, 1);
  res.json({ success: true, message: 'Product deleted.' });
}

module.exports = { getAll, getOne, create, update, remove };
