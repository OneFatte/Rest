const express = require('express');
const router = express.Router();

//const controllers = require('../controllers'); //1- Funcion normal
const { UserControllers } = require('../controllers'); //2- Destructurando


//router.get('/', controllers.UserControllers.getUsers); //1- Normal
router.get('/', UserControllers.getUsers); // 2- Destructurando

router.get('/', UserControllers.getOneUsers);

router.post('/', UserControllers.createUser);

router.put('/:id', UserControllers.putUser);

router.patch('/:id', UserControllers.udapteUser);

router.delete('/:id', UserControllers.deleteUser);

module.exports = router;
