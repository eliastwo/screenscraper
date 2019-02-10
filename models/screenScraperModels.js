var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScreenScraperSchema = new Schema({
	    title: {type: String, required: true, max: 100},
		url: {type: String, required: true, max: 120},
		username: {type: String, required: true, max: 100},
		comments: {type: String, required: true, max: 100}
});

// This creates our model from the above schema, using mongoose's model method
//var Article = mongoose.model("Article", ScreenScraperSchema);

// Export the Article model
module.exports = Article;