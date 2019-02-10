var ScreenScraper = require('../models/ScreenScraperModels');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    console.log(req.body);
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err, results) {
        if(err) { console.log(err);
        }
        console.log(results);
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.query.id, function (err, product) {
        if(err) console.log(err);
        console.log(product);
        res.json(product);
    })
};

exports.product_update = function (req, res) {
    Product.findOneAndUpdate(req.query.id, function (err, product) {
        if(err) console.log(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findOneAndDelete(req.query.id, function (err, product) {
        if(err) console.log(err);
        res.send('Deleted successfully!');
    })
};

exports.product_all = function (req, res) {
    Product.find({}, function (err, product) {
        if(err) console.log(err);
        console.log(product);
        res.json(product);
    })
};