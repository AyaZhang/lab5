// Get all of our friend data
var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	console.log(data);
	res.render('index');
};