/* ========================================================================
 * FrontEndDev: product.js v1.0.0
 * ========================================================================
 * This file is the model for Norton products
 * using mongoose module to create schema
 * ======================================================================== */


// module dependencies 
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// create Product model
var Product = new Schema({
	id : ObjectId,
		slot : {type :Number},
		name : {type : String},
		abbr : {type : String},
		boxshot : {type :String},
		mediumBoxshot : {type :String},
		largeBoxshot : {type :String},
		description : {type :String},
		productFamily : {type :String},
		entitlement : {type :String},
		awards : [{type :String}],
		CTA : {
			purchase : {
				oneYear : {	
					show : {type :Number},
					addToCart : {type :String},
					buyButtonImg : {type :String},
					buyButtonText : {type :String},
					showPrice : {type :Number},
					price : {type :String},
					priceValue : {type :Number},
					showMsrp : {type :Number},
					msrp : {type :String},
					msrpValue : {type :Number},
					showMessage : {type :Number},
					savingsMessage : {type :String},
					savingsAmount : {type :Number},
					savingPercentage : {type :Number},
					pdLink : {type :String},
					selectedSKU : {type :Number},
					seatCount : {type :String},
					trackingParams : {type :String}
				},
				twoYear : {	
					show : {type :Number},
					addToCart : {type :String},
					buyButtonImg : {type :String},
					buyButtonText : {type :String},
					showPrice : {type :Number},
					price : {type :String},
					priceValue : {type :Number},
					showMsrp : {type :Number},
					msrp : {type :String},
					msrpValue : {type :Number},
					showMessage : {type :Number},
					savingsMessage : {type :String},
					savingsAmount : {type :Number},
					savingPercentage : {type :Number},
					pdLink : {type :String},
					selectedSKU : {type :Number},
					seatCount : {type :String},
					trackingParams : {type :String}
				},
				threeYear : {
					show : {type :Number},
					addToCart : {type :String},
					buyButtonImg : {type :String},
					buyButtonText : {type :String},
					showPrice : {type :Number},
					price : {type :String},
					priceValue : {type :Number},
					showMsrp : {type :Number},
					msrp : {type :String},
					msrpValue : {type :Number},
					showMessage : {type :Number},
					savingsMessage : {type :String},
					savingsAmount : {type :Number},
					savingPercentage : {type :Number},
					pdLink : {type :String},
					selectedSKU : {type :Number},
					seatCount : {type :String},
					trackingParams : {type :String}
				}
			},
			download : {
				show : {type :Number},
				downloadImg : {type :String},
				downloadText : {type :String},
				downloadLink : {type :String},
				entitlement : {type :String},
				savingsMessage : {type :String},
				selectedSKU : {type :Number},
				trackingParams : {type :String}
			}
		}
});

// export the Product model
module.exports = mongoose.model('Product', Product);

