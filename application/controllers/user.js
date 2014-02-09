//encrypt password?
/* ========================================================================
 * FrontEndDev: user.js v1.0.0
 * ========================================================================
 * This file is the controller for a user to login
 * or create an account using the user model
 * ======================================================================== */

// Module dependencies
// ============================================================
var User = require('../models/user.js');

/* ========================================================================
// Login 
// This route will find a specific user in the db and if found
// login, else fail and try again 
* ======================================================================== */
exports.login = function (req, res) {
	// get data from the input fields and store in userlogin
	var userlogin = {
		username : req.body.username,
		password : req.body.password
	};

	// using mongoose, findOne() specific user in the database
	User.findOne({username : userlogin.username}, function (err, user) {
		if (err){
			res.send('There is no account found');
		} else {
			// testing a matching password
			user.comparePassword(userlogin.password, function (err, isMatch) {
				if (err) throw err;

				if (isMatch == true){
					req.session.loggedIn = userlogin.username
					//res.cookie('loggedIn', userlogin.username);
					res.render('widgets/productDisplay', {name : 'Norton Antivirus'});
				} else {
					res.render('widgets/signin', {errMessage : 'Username or Password do not match.'});
				}
			});
		}
	});
};

/* ========================================================================
// Create
// This route will will allow a user to create an account.
// Using mongoose, save the user input if it's unique
* ======================================================================== */
exports.create = function (req, res) {
	// get data from the input fields and store in user
	var user = {
		username : req.body.signupusername, 
		password : req.body.signuppassword
	};

	// create a User instance and pass it the user information
	var userModel = new User(user);
	
	// save the user if the data is unique and no errors
	userModel.save(function(err, data) {
		if(err) {
			res.send("Something went wrong " + err);
			console.log(err, data)
		} else {
			console.log(data);
			res.send('Saved user ');
		}
	})
};

// show an account 
exports.show = function (req, res) {
	var indx = req.params.id;
	User.findOne({username : indx}, function (err, user) {
		if (err) {
			res.send('There is no such user');
		} else {
			if(user !== null && user !== 'undefined' && user !== '') {
				res.send('hi ' + user.username);
			} else {
				res.redirect('/')
			}
		} 
	});
	//res.send('show');
};

// edit
exports.edit = function (req, res) {
	res.send('show');
};

// delete an account 
exports.destroy = function (req, res) {
	res.send('destroy');
};

// update an account
exports.update = function (req, res) {
	res.send('update');
};