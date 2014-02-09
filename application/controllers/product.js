/* ========================================================================
 * FrontEndDev: product.js v1.0.0
  * ========================================================================
 * This file is the controller for Norton products
 * We can control the routes of products
 * ======================================================================== */

// Require the product schema model
var Product = require('../models/product.js');

/* ========================================================================
// Login 
// This route will find a specific product and return if 
// there is no err 
* ======================================================================== */
exports.login = function (req, res) {
	Product.find({}, function (err, doc) {
		if (err){
			res.send('No product');
		} else {
			if(!doc){
				res.send('Couldnt find product')
			} else {
				res.send('Whats up doc ' + doc);
			}	
		}
	});
};

/* ========================================================================
// Create 
// This route will get the Norton product data and store it as a 
// model in our MongoDb 
* ======================================================================== */
exports.create = function (req, res) {
	// require the product information that's predefined
	var productData = require('../models/productData.js');
	
	// Store all products in an array
	var productCatalog = [productData.nav, productData.nis, productData.n360, productData.n1, productData.nms];
	
	// Loop through each product and save a model of it into MongoDb
	productCatalog.forEach(function(data) {
		var productModel = new Product(data);

		productModel.save(function (err, data) {
			if(err) {
				res.send("Something went wrong " + err);
			} else {
				res.send('Added products');
				res.redirect('/');
			}
		});
	})
	
	
};

/* ========================================================================
// Show 
* ======================================================================== */
exports.show = function (req, res) {
	var products = req.params.id;
	
	Product.findOne({abbr : products}, function (err, product) {
		if (err) {
			res.send('There is no widget with this attr');
		} else {
			if (product !== null && product !== 'undefined' && product !== '') {
				res.render('widgets/productDisplay', {product : product});
			} else {
				res.redirect('/');
			}
		}
	})
};

/* ========================================================================
// Edit
* ======================================================================== */
exports.edit = function (req, res) {
	res.send('show');
};

/* ========================================================================
// Delete
* ======================================================================== */
exports.destroy = function (req, res) {
	res.send('destroy');
};

// update an account
exports.update = function (req, res) {
	res.send('update');
};

/* ========================================================================
// getProducts - getter for all products
* ======================================================================== */
exports.getAllProducts = function (callback) {
	Product.find({}, function (err, products) {
		if (err) {
			console.log(err)
		} else {
			callback(products)
		}
	})
};

exports.getOneProduct = function (callback, name) {
	Product.findOne({abbr : name}, function (err, products) {
		if(err) {
			console.log(err);
		} else {
			callback(products)
		}
	})
}

