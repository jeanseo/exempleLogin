const Beer = require('../models/beer');

exports.getAllBeers = (req, res, next) => {

    Beer.find()
        .then((beers) =>{
            console.log(beers);
            res.render('beerList',{ beerList: beers });
        })
        .catch(error => res.status(400).json({ error }));

};

exports.getOneBeer  = (req, res, next) => {
    console.log(req.params.id);
    Beer.findById(req.params.id)
        .then((beer)=>{
            res.render('beerEdit',{beer: beer});
        })
        .catch(error => res.status(500).json({ error }))
};

exports.deleteOneBeer = (req, res, next) => {

    Beer.findByIdAndRemove();
};

exports.createBeer = (req, res, next) => {
    console.log("creation d'une biere",req.body);
    req.body.tried = req.body.tried === 'on';
    const beer = new Beer({
        ...req.body
    });

    beer.save()
        .then(()=>res.redirect('/'))
        .catch((err)=> res.send(err))
};

exports.updateBeer = (req, res, next) => {
    console.log("modification d'une bière")
};



