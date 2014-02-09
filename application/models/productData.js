/* ========================================================================
 * FrontEndDev: productData.js v1.0.0
 * ========================================================================
 * This file contains Norton products with attributes that need to be 
 * stored in a database so that this information can be persisted
 * ======================================================================== */

// Norton Antivirus data
// ============================================================
exports.nav = {
	slot : 1,
	name : "Norton™ Antivirus",
	abbr : "nav",
	boxshot : "//buy-static.norton.com/norton/ps/images/boxshot_nav_2013_sml.png",
	mediumBoxshot : "//buy-static.norton.com/norton/ps/images/boxshot_nav_2013_med.png",
	largeBoxshot : "//buy-static.norton.com/norton/ps/images/boxshot_nav_2013_lrg.png",
	description : "Basic protection that stops viruses and spyware",
	productFamily : "nav",
	entitlement : "1-Year Protection",
	awards : ['//buy-static.norton.com/norton/ps/images/oneup/nav_PCaward6X.png', 'image2.png', 'image3.png'],
	CTA : {
		purchase : {
			oneYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21294070&ctry=US&lang=en&tppc=PL_100&ptype=cart",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-right.png",
				buyButtonText : "1-year Download",
				showPrice : 1,
				price : "$49.99",
				priceValue : 49.99,
				showMsrp : 0,
				msrp : "$89.99",
				msrpValue : 89.99,
				showMessage : 0,
				savingsMessage : "Save now",
				savingsAmount : 10,
				savingPercentage : 50,
				pdLink : "http://buy.norton.com/ps?selSKU=21294070&ctry=US&lang=en&tppc=PL_100&ptype=pd",
				selectedSKU : 21294070,
				seatCount : "Windows 8/7/XP/Vista. Up to 3 household PCs",
				trackingParams : "&om_sem_cid=hho_sem_sy:us:ggl:en:e|kw0000159461|27024706636|c&country=US"
			},
			twoYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21294123&ctry=US&lang=en&tppc=PL_100&ptype=cart",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "2-year Download",
				showPrice : 0,
				price : "$74.99",
				priceValue : 74.99,
				showMsrp : 0,
				msrp : "$89.99",
				msrpValue : 89.99,
				showMessage : 0,
				savingsMessage : "Save 20 now",
				savingsAmount : 20,
				savingPercentage : 30,
				pdLink : "http://buy.norton.com/ps?selSKU=21294123&ctry=US&lang=en&tppc=PL_100&ptype=pd",
				selectedSKU : 21294123,
				seatCount : "Windows 8/7/XP/Vista. Up to 3 household PCs",
				trackingParams : "&ctry=US&lang=en"
			},
			threeYear : {
				show : 0,	
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "3-year Download",
				showPrice : 1,
				price : "$zz.99",
				priceValue : 89.99,
				showMsrp : 0,
				msrp : "$zz.99",
				msrpValue : 89.99,
				showMessage : 0,
				savingsMessage : "Save 0 now",
				savingsAmount : 0,
				savingPercentage : 0,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				seatCount : "Windows 8/7/XP/Vista. Up to 3 household PCs",
				trackingParams : "&ctry=US&lang=en"
			}
		},
		download : {
			show : 0,
			downloadImg : "//buy-static.norton.com/norton/ps/images/btn-right.png",
			downloadText : "Try Now",
			downloadLink : "http://buy.norton.com/ps?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
			entitlement : "30-Day Free Trial",
			savingsMessage : "FREE",
			selectedSKU : 21292818,
			trackingParams : "?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
		}
	}
};

// Norton Internet Security data
// ============================================================
exports.nis = {
	slot : 1,
	name : "Norton™ Internet Security",
	abbr : "nis",
	boxshot : "//buy-static.norton.com/norton/ps/images/boxshot_nis_2013_sml.png",
	mediumBoxshot : "//buy-static.norton.com/norton/ps/images/boxshot_nis_2013_med.png",
	largeBoxshot : "//buy-static.norton.com/norton/ps/images/boxshot_nis_2013_lrg.png",
	description : "Advanced virus and internet protection anywhere online",
	productFamily : "nis",
	entitlement : "1-Year Protection",
	seatCount : "Windows 8/7/XP/Vista. Up to 3 household PCs",
	awards : ['image1.png', 'image2.png', 'image3.png'],
	CTA : {
		purchase : {
			oneYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=PL_100&ptype=cart",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "1-year Download",
				showPrice : 1,
				price : "$79.99",
				priceValue : 79.99,
				showMsrp : 0,
				msrp : "$89.99",
				msrpValue : 89.99,
				showMessage : 0,
				savingsMessage : "Save 40 now",
				savingsAmount : 40,
				savingPercentage : 50,
				pdLink : "http://buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=PL_100&ptype=pd",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
			},
			twoYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21292827&ctry=US&lang=en&tppc=245d97cb22daa6e19db0405119df0fd1&ptype=cart",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "2-year Download",
				showPrice : 0,
				price : "$134.99",
				priceValue : 134.99,
				showMsrp : 0,
				msrp : "$149.99",
				msrpValue : 149.99,
				showMessage : 0,
				savingsMessage : "Save 20 now",
				savingsAmount : 20,
				savingPercentage : 30,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en"
			},
			threeYear : {
				show : 0,	
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				showPrice : 1,
				price : "$zz.99",
				priceValue : 89.99,
				showMsrp : 0,
				msrp : "$zz.99",
				msrpValue : 89.99,
				showMessage : 0,
				savingsMessage : "Save 0 now",
				savingsAmount : 0,
				savingPercentage : 0,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en"
			}
		},
		download : {
			show : 0,
			downloadImg : "//buy-static.norton.com/norton/ps/images/btn-right.png",
			downloadText : "Try Now",
			downloadLink : "http://buy.norton.com/ps?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
			entitlement : "30-Day Free Trial",
			savingsMessage : "FREE",
			selectedSKU : 21292818,
			trackingParams : "?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
		}
	}
};

// Norton 360 data
// ============================================================
exports.n360 = {
	slot : 1,
	name : "Norton™ 360",
	abbr : "n360",
	boxshot : "//buy-static.norton.com/norton/ps/images/boxshot_n360_2013_sml.png",
	mediumBoxshot : "//buy-static.norton.com/norton/ps/images/boxshot_n360_2013_med.png",
	largeBoxshot : "//buy-static.norton.com/norton/ps/images/boxshot_n360_2013_lrg.png",
	description : "Ultimate virus protection - with backup and 2 GB online storage",
	productFamily : "n360",
	entitlement : "1-Year Protection",
	seatCount : "Windows 8/7/XP/Vista. Up to 3 household PCs",
	awards : ['//buy-static.norton.com/norton/ps/images/awards_horiz.png', 'image2.png', 'image3.png'],
	CTA : {
		purchase : {
			oneYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				showPrice : 1,
				price : "$9show9.99",
				priceValue : 49.99,
				showMsrp : 0,
				msrp : "$xx.99",
				msrpValue : 89.99,
				showSavings : 0,
				savingsMessage : "Save 40 now",
				savingsAmount : 40,
				savingPercentage : 50,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
			},
			twoYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				showPrice : 1,
				price : "$xx.99",
				priceValue : 89.99,
				showMsrp : 0,
				msrp : "$xx.99",
				msrpValue : 89.99,
				showMessage : 0,
				savingsMessage : "Save 20 now",
				savingsAmount : 20,
				savingPercentage : 30,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en"
			},
			threeYear : {
				show : 0,	
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				showPrice : 0,
				price : "$zz.99",
				priceValue : 89.99,
				showMsrp : 0,
				msrp : "$zz.99",
				msrpValue : 89.99,
				showMessage : 0,
				savingsMessage : "Save 0 now",
				savingsAmount : 0,
				savingPercentage : 0,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en"
			}
		},
		download : {
			show : 0,
			downloadImg : "//buy-static.norton.com/norton/ps/images/btn-right.png",
			downloadText : "Try Now",
			downloadLink : "http://buy.norton.com/ps?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
			entitlement : "30-Day Free Trial",
			savingsMessage : "FREE",
			selectedSKU : 21292818,
			trackingParams : "?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
		}
	}
};

// Norton One data
// ============================================================
exports.n1 = {
	slot : 1,
	name : "Norton One",
	abbr : "n1",
	boxshot : "//buy.norton.com/norton/ps/images/boxshot_n360_2013_lrg.png",
	description : "Our ultimate Internet and antivirus protection for all you do online",
	productFamily : "n1",
	entitlement : "1 year for 3 PCs",
	seatCount : "Windows 8/7/XP/Vista. Up to 3 household PCs",
	awards : ['image1.png', 'image2.png', 'image3.png'],
	CTA : {
		purchase : {
			oneYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				showPrice : 1,
				price : "$149.99",
				priceValue : 149.99,
				showMsrp : 0,
				msrp : "$xx.99",
				msrpValue : 89.99,
				showMessage : 0,
				savingsMessage : "Save 40 now",
				savingsAmount : 40,
				savingPercentage : 50,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
			},
			twoYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				price : "$xx.99",
				priceValue : 99.99,
				msrp : "$xx.99",
				msrpValue : 89.99,
				savingsMessage : "Save 20 now",
				savingsAmount : 20,
				savingPercentage : 30,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en"
			},
			threeYear : {
				show : 1,	
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				price : "$zz.99",
				priceValue : 89.99,
				msrp : "$zz.99",
				msrpValue : 89.99,
				savingsMessage : "Save 0 now",
				savingsAmount : 0,
				savingPercentage : 0,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en"
			}
		},
		download : {
			show : 0,
			downloadImg : "//buy-static.norton.com/norton/ps/images/btn-right.png",
			downloadText : "Try Now",
			downloadLink : "http://buy.norton.com/ps?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
			entitlement : "30-Day Free Trial",
			savingsMessage : "FREE",
			selectedSKU : 21292818,
			trackingParams : "?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
		}
	}
};

// Norton Mobile Security data
// ============================================================
exports.nms = {
	slot : 1,
	name : "Norton Mobile Security",
	abbr : "nms",
	boxshot : "//buy.norton.com/norton/ps/images/boxshot_n360_2013_lrg.png",
	description : "Our ultimate Internet and antivirus protection for all you do online",
	productFamily : "Product's Family",
	entitlement : "1 year for 3 PCs",
	seatCount : "Windows 8/7/XP/Vista. Up to 3 household PCs",
	awards : ['image1.png', 'image2.png', 'image3.png'],
	CTA : {
		purchase : {
			oneYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				price : "$xx.99",
				priceValue : 49.99,
				msrp : "$xx.99",
				msrpValue : 89.99,
				savingsMessage : "Save 40 now",
				savingsAmount : 40,
				savingPercentage : 50,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
			},
			twoYear : {	
				show : 1,
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				price : "$xx.99",
				priceValue : 99.99,
				msrp : "$xx.99",
				msrpValue : 89.99,
				savingsMessage : "Save 20 now",
				savingsAmount : 20,
				savingPercentage : 30,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en"
			},
			threeYear : {
				show : 1,	
				addToCart : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=cart&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				buyButtonImg : "//buy-static.norton.com/norton/ps/images/btn-left.png",
				buyButtonText : "Buy Now",
				price : "$zz.99",
				priceValue : 89.99,
				msrp : "$zz.99",
				msrpValue : 89.99,
				savingsMessage : "Save 0 now",
				savingsAmount : 0,
				savingPercentage : 0,
				pdLink : "//buy.norton.com/ps?selSKU=21292843&ctry=US&lang=en&tppc=40D6AFAE-BDE9-F3B2-3561-EE09618FFC5D&ptype=pd&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
				selectedSKU : 21292843,
				trackingParams : "&ctry=US&lang=en"
			}
		},
		download : {
			show : 0,
			downloadImg : "//buy-static.norton.com/norton/ps/images/btn-right.png",
			downloadText : "Try Now",
			downloadLink : "http://buy.norton.com/ps?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US",
			entitlement : "30-Day Free Trial",
			savingsMessage : "FREE",
			selectedSKU : 21292818,
			trackingParams : "?ctry=US&lang=EN&selSKU=21292818&om_sem_cid=hho_sem_sy:us:ggl:en:b|kw0000002452|28399098796|c&country=US"
		}
	}
};
