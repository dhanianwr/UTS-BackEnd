const express = require('express');
const {Home, About, Contact, Apidata, Kirimdata, Editdata, Delete} = require('../controllers/page');
const router = express.Router();

router.get('/', Home);
router.get('/about', About);
router.get('/contact', Contact);
router.use(express.json())
router.get('/api/data', Apidata);
router.post('/tambahdata', Kirimdata);
router.put('/editdata/:id', Editdata);
router.delete('/delete/:id', Delete);

module.exports = router;