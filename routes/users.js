var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.get_user);

router.get('/add', userController.add_user_form);
router.post('/add', userController.add_user);
router.get('/:id/delete', userController.delete_user)
router.get('/:id/edit', usersController.edit_user);
router.post('/:id/change', usersController.edit_2_user);

module.exports = router;
