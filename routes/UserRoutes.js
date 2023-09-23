const express = require('express');
const router = express.Router();

//const controllers = require('../controllers'); //1- Funcion normal
const { UserControllers } = require('../controllers'); //2- Destructurando

// Localhost:3000/users
//router.get('/', controllers.UserControllers.getUsers); //1- Normal
router.get('/', UserControllers.getUsers); // 2- Destructurando

// Localhost:3000/users/id
router.get('/:id', UserControllers.getOneUsers);

// Localhost:3000/users
router.post('/', UserControllers.createUser);


router.put('/:id', UserControllers.putUser);

router.patch('/:id', UserControllers.udapteUser);

router.delete('/:id', UserControllers.deleteUser);

module.exports = router;
