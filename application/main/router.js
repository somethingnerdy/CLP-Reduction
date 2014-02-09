/* ========================================================================
 * FrontEndDev: router.js v1.0.0
 * ========================================================================
 * This file contains what to render for the login and create route
 * ======================================================================== */

// including product controller
var products = require('../controllers/product');
var Product = require('../models/product.js');

/* ========================================================================
// main 
// This route will render the main template and fetch the products from 
// the mongodb. The products are then passed into the template to render.
* ======================================================================== */
exports.main = function(req, res){
	products.getAllProducts(function (products) {
		console.log(products);
		res.render('widgets/main', {products : products}, function (err, stuff) {
		  	if (!err) {
		  		console.log(stuff);
		  		res.write(stuff);
		  		res.end();
		  	}
		  });
	});
};

/* ========================================================================
// Create 
// This route will render the productPopulate template
// This function is temporary and will be removed 
* ======================================================================== */
exports.create = function (req, res) {
	res.render('widgets/productPopulate', {}, function (err, stuff) {
		if(!err) {
			console.log(stuff);
			res.write(stuff);
			res.end();
		}
	});
};

/* ========================================================================
// Acquisition  
// This route is used for our acquisition pages. We will use the 
// /productMix/:id route to get the products from the database and 
// represent it on the client. Depending on the productMix typed,
// the user will get that data back in a view.
* ======================================================================== */
exports.acquisition = function (req, res){
	var productMixParam = req.params.id, // param id
		displayProducts = [], // products that will be rendered on view
		count = 0;

	/* ========================================================================
	// dataComplete() - control flow so that displayProduct[] can render
	// element on the view
	* ======================================================================== */
	function dataComplete () {
		res.render('widgets/main', {products : displayProducts});
	}

	// The param has the delimiter _
	if (productMixParam.indexOf('_') != -1) {
		var productMixSplit = productMixParam.split('_');

		// Loop each param
		productMixSplit.forEach(function (data) {
			count++;

			// Find the product that the param indicated
			Product.find({abbr : data}, function (err, products, next) {
				if (err) {
					console.log(err);
				} else {
					count--;
					displayProducts.push(products); // push the product data into array
					if (count == 0) {
						dataComplete(); // nested function to render products
					}
				}
			});
		});
	} else {
		Product.find({abbr : productMixParam}, function (err, products) {
			if (err) {
				console.log(err);
			} else {
				displayProducts.push(products);
				res.render('widgets/main', {products : products});
			}
		});
	}
};





