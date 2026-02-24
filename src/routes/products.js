const router = require('express').Router();
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createProductValidators, updateProductValidators } = require('../validators/productValidators');
const { getAll, getOne, create, update, remove } = require('../controllers/productController');

// All product routes are protected
router.use(auth);

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createProductValidators, validate, create);
router.put('/:id', updateProductValidators, validate, update);
router.delete('/:id', remove);

module.exports = router;
