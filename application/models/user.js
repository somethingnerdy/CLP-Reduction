/* ========================================================================
 * FrontEndDev: user.js v1.0.0
 * ========================================================================
 * This file is the model for a user
 * using mongoose module to create schema
 * ======================================================================== */

// module dependencies
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	bcrypt = require('bcrypt'), // allows for one-way encryption of user passwords
	SALT_WORK_FACTOR = 10,
	ObjectId = Schema.ObjectId;

// create User model
var User = new Schema({
	id : ObjectId,
	username : {type : String, required: true, trim: true, index : true, unique: true},
	password : {type : String, required: true, trim: true}
});

User.pre('save', function (next) {
	var user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);

		// hash the password along with our new salt
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);

			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

// Password Verification
User.methods.comparePassword = function (candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return callback(err);
		callback(null, isMatch);
	});
};
// export the User model
module.exports = mongoose.model('User', User);