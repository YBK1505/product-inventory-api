const router = require('express').Router();
const { register, login } = require('../controllers/authController');
const { registerValidators, loginValidators } = require('../validators/authValidators');
const validate = require('../middleware/validate');

router.post('/register', registerValidators, validate, register);
router.post('/login', loginValidators, validate, login);

module.exports = router;
