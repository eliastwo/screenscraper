let express = require('express');
const router = express.Router();
const http = require('http');
const bodyParser = require('body-parser');
const db = require('../config/mongoConfig.js');
let pg = require('pg');
const path = require('path');
const fs = require('fs');
//const Database = require('./config/MongoConfig');

//Middleware for body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded( { extended: false } ));

let request = require('request');
let cheerio = require('cheerio');
const ssurl = 'https://news.ycombinator.com';

let parsedResults = [];
var data = '';
let title = '';

request(ssurl, function(error, response, html) {
    if(!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        
        $('span.comhead').each(function(i, element) {
            var item = $(this).prev();
            var rank = item.parent().parent().text();
            var title = item.text();
            var url = item.attr('href');
            var subtext = item.parent().parent().next().children('.subtext').children();
            var points = $(subtext).eq(0).text();
            var username = $(subtext).eq(1).text();
            var comments = $(subtext).eq(2).text();

            var data = {
                rank: parseInt(rank),
                title: title,
                url: url,
                points: parseInt(points),
                username: username,
                comments: parseInt(comments)
            };
                parsedResults.push(data);
        });
            console.log(parsedResults);
    }
});

/* db.create(parsedResults, function(err, res) {
    if(err) {
        res.status(400).json( {err: 'Unable to insert data.', message: err} );
    }
}); */

module.exports = router;
