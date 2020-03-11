const express = require('express');
const router = express.Router();
const beerController = require('../controllers/beer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/create', (req, res, next)=>{
  res.render('beerCreate');
});

router.post('/create', beerController.createBeer);

router.get('/delete/:id', beerController.deleteOneBeer);

router.get('/edit/:id', beerController.getOneBeer);

router.post('/edit/:id', beerController.updateBeer);

router.get('/beers', beerController.getAllBeers);



module.exports = router;
