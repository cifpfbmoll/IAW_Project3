const express = require('express');
const router = express.Router();

//desc Login/Landin page
//@route get /
router.get('/', (req, res) => {
    res.render('home')
});

module.exports = router;