// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = "mongodb://myroot:myroot1@ds163254.mlab.com:63254/screenscraper";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log("Connected to MongoDB.");







module.exports - db;