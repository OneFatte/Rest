const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).send(['Usuario Falso', 'Usuario Falso']);
});

router.post('/', (req, res) => {
    res.send(['Usuario Falso', 'Usuario Falso']);
});

router.put('/:id', (req, res) => {
    res.send(['Usuario Falso', 'Usuario Falso']);
});

router.patch('/:id', (req, res) => {
    res.send(['Usuario Falso', 'Usuario Falso']);
});

router.delete('/:id', (req, res) => {
    res.send(['Usuario Falso', 'Usuario Falso']);
});

module.exports = router;
