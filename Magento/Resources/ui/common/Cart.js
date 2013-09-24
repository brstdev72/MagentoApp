function Cart() {
	
	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var font2 = (Titanium.Platform.displayCaps.platformHeight * 2.2) / 100;
	var font3 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var font4 = (Titanium.Platform.displayCaps.platformHeight * 2.5) / 100;
	var font5 = (Titanium.Platform.displayCaps.platformHeight * 1.5) / 100;
	
	var border = (Titanium.Platform.displayCaps.platformHeight * 0.5) / 100;

	var selected_item = Ti.App.Properties.getString('selected_item');

	var hgt = Titanium.Platform.displayCaps.platformHeight;
	var wdh = Ti.Platform.displayCaps.platformWidth;

	var Allview = Ti.UI.createView({
		backgroundColor : '#F3F3F3',
		top : 0,
		height : '100%',
		width : '100%'
	});

	var topView = Ti.UI.createView({
		backgroundImage : '/images/header_bg.png',
		backgroundColor : '#5F6465',
		height : '10%',
		width : '100%',
		top : 0
	});

	Allview.add(topView);

	// Create a Button.
	var shopbutton = Ti.UI.createButton({
		backgroundColor : '#212526',
		title : 'Edit',
		color : 'white',
		height : '70%',
		width : '15%',
		left : '2%',
		borderRadius : border
	});

	// Listen for click events.
	shopbutton.addEventListener('click', function() {
		var ProductInformationPage = require('ProductInformationPage');
		var productInformationPage = new ProductInformationPage();
		Ti.UI.currentWindow.add(productInformationPage);
	});

	// Add to the parent view.
	topView.add(shopbutton);

	// Create a Button.
	var cartbutton = Ti.UI.createButton({
		backgroundColor : '#E37E33',
		color : 'white',
		title : 'Checkout',
		height : '70%',
		width : '25%',
		right : '2%',
		borderRadius : border
	});

	// Listen for click events.
	cartbutton.addEventListener('click', function() {
		Allview.add(AllCart);
	});

	// Add to the parent view.
	topView.add(cartbutton);

	// Create an ImageView.
	var iconTop = Ti.UI.createImageView({
		image : '/images/icon.png',
		width : '15%',
		height : '80%',
		left : '32%'
	});
	iconTop.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	topView.add(iconTop);

	// Create a Label.
	var shoplabel = Ti.UI.createLabel({
		text : 'Cart',
		color : 'white',
		font : {
			fontSize : font1
		},
		left : '48%',
		textAlign : 'center'
	});

	// Add to the parent view.
	topView.add(shoplabel);

	var body = Ti.UI.createScrollView({
		backgroundColor : '#F3F3F3',
		top : '10%',
		height : '80%',
		width : '100%',
		layout : 'vertical'
	});
	Allview.add(body);

	var productTitleView = Ti.UI.createView({
		backgroundImage:'/images/header_bg.png',
		backgroundColor : '#5F6465',
		height : hgt * 0.07,
		width : '100%',
		top : '0.5%'
	});

	body.add(productTitleView);

	// Create a Label.
	var staticProductlabel = Ti.UI.createLabel({
		text : 'Product',
		color : 'white',
		font : {
			fontSize : font1
		},
		left : '4%',
		textAlign : 'center'
	});

	// Add to the parent view.
	productTitleView.add(staticProductlabel);

	// Create a Label.
	var staticQtylabel = Ti.UI.createLabel({
		text : 'Qty',
		color : 'white',
		font : {
			fontSize : font1
		},
		right : '4%',
		textAlign : 'center'
	});

	// Add to the parent view.
	productTitleView.add(staticQtylabel);

	var GetProductView = Ti.UI.createView({
		backgroundColor : '#5F6465',
		height : Ti.UI.SIZE,
		width : '100%',
		top : '0.5%'
	});

	body.add(GetProductView);

	for (var i = 0; i < 1; i++) {
		var repeatGetProductView = Ti.UI.createView({
			height : hgt * 0.2,
			width : '100%',
			layout : 'horizontal'
		});

		body.add(repeatGetProductView);

		// Create an ImageView.
		var productImage = Ti.UI.createImageView({
			image : '/images/magento.png',
			width : wdh * 0.3,
			height : hgt * 0.15,
			top : hgt * 0.025,
			left : wdh * 0.02,
		});
		productImage.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		repeatGetProductView.add(productImage);

		var detailView = Ti.UI.createView({
			height : hgt * 0.15,
			width : wdh * 0.45,
			layout : 'vertical',
			left : '5%',
			top : hgt * 0.025,
		});

		repeatGetProductView.add(detailView);

		// Create a Label.
		var productNamelabel = Ti.UI.createLabel({
			text : selected_item,
			color : 'black',
			font : {
				fontSize : font2
			},
			left : '0%',
			textAlign : 'center'
		});

		// Add to the parent view.
		detailView.add(productNamelabel);

		// Create a Label.
		var unitpricelabel = Ti.UI.createLabel({
			text : 'unitprice: ',
			color : 'black',
			font : {
				fontSize : font3
			},
			left : '0%',
		});

		// Add to the parent view.
		detailView.add(unitpricelabel);

		// Create a Label.
		var subtotallabel = Ti.UI.createLabel({
			text : 'subtotal: ',
			color : 'black',
			font : {
				fontSize : font3
			},
			left : '0%',
		});

		// Add to the parent view.
		detailView.add(subtotallabel);

		// Create a Label.
		var totalQtylabel = Ti.UI.createLabel({
			text : '4',
			color : 'black',
			font : {
				fontSize : font3
			},
			left : '10%',
		});

		// Add to the parent view.
		repeatGetProductView.add(totalQtylabel);

	}

	var GetProducttitleView = Ti.UI.createView({
		backgroundColor : '#D1D1D1',
		height : hgt * 0.08,
		width : '100%',
		top : '0%'
	});

	body.add(GetProducttitleView);

	// Create a TextField.
	var aTextField = Ti.UI.createTextField({
		top : '10%',
		height : '90%',
		width : '90%',
		borderRadius : border,
		hintText : 'Enter discount code if any',
		font : {
			fontSize : font2
		},
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	});

	// Listen for return events.
	aTextField.addEventListener('return', function(e) {
		aTextField.blur();
		alert('Input was: ' + aTextField.value);
	});

	// Add to the parent view.
	GetProducttitleView.add(aTextField);

	var priceView = Ti.UI.createView({
		height : hgt * 0.15,
		width : '100%',
		layout : 'horizontal'
	});

	body.add(priceView);
	
	
	// Create an ImageView.
	var aboutimages = Ti.UI.createView({
		backgroundImage : '/images/about-1.png',
		width : '10%',
		height : '40%',
		left : '5%'
	});
	aboutimages.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});
	
	// Add to the parent view.
	priceView.add(aboutimages);
	

	var priceViewstatictitle = Ti.UI.createView({
		height : hgt * 0.13,
		layout : 'vertical',
		width : '25%',
		left : '20%',
		top : '15%'
	});

	priceView.add(priceViewstatictitle);

	// Create a Label.
	var subpriceViewstatictitle1 = Ti.UI.createLabel({
		text : 'subtotal',
		color : 'black',
		font : {
			fontSize : font4
		},
		right : '0%',
	});

	// Add to the parent view.
	priceViewstatictitle.add(subpriceViewstatictitle1);

	// Create a Label.
	var subpriceViewstatictitle2 = Ti.UI.createLabel({
		text : 'Tax',
		color : 'black',
		font : {
			fontSize : font4
		},
		right : '0%',
	});

	// Add to the parent view.
	priceViewstatictitle.add(subpriceViewstatictitle2);

	// Create a Label.
	var subpriceViewstatictitle3 = Ti.UI.createLabel({
		text : 'Grand Total',
		color : 'black',
		font : {
			fontSize : font4
		},
		right : '0%',
	});

	// Add to the parent view.
	priceViewstatictitle.add(subpriceViewstatictitle3);

	var priceViewvarytitle = Ti.UI.createView({
		height : hgt * 0.13,
		layout : 'vertical',
		width : '35%',
		top : '15%'
	});

	priceView.add(priceViewvarytitle);

	// Create a Label.
	var subpriceViewstatictitle1 = Ti.UI.createLabel({
		text : '$654,565',
		color : '#E75E01',
		font : {
			fontSize : font4
		},
		right : '2%',
	});

	// Add to the parent view.
	priceViewvarytitle.add(subpriceViewstatictitle1);

	// Create a Label.
	var subpriceViewstatictitle2 = Ti.UI.createLabel({
		text : '$5454,656',
		color : '#E75E01',
		font : {
			fontSize : font4
		},
		right : '2%',
	});

	// Add to the parent view.
	priceViewvarytitle.add(subpriceViewstatictitle2);

	// Create a Label.
	var subpriceViewstatictitle3 = Ti.UI.createLabel({
		text : '$5456,765',
		color : '#E75E01',
		font : {
			fontSize : font4
		},
		right : '2%',
	});

	// Add to the parent view.
	priceViewvarytitle.add(subpriceViewstatictitle3);

	var likeTitleView = Ti.UI.createView({
		backgroundImage:'/images/header_bg.png',
		backgroundColor : '#5F6465',
		height : hgt * 0.07,
		width : '100%',
	});

	body.add(likeTitleView);

	// Create a Label.
	var likeTitle = Ti.UI.createLabel({
		text : 'You may also like',
		color : 'white',
		font : {
			fontSize : font4
		},
		left : '7%',
	});

	// Add to the parent view.
	likeTitleView.add(likeTitle);

	var count = 1;

	for (var i = 0; i < 6; i++) {
		var LikeProductView = Ti.UI.createView({
			height : hgt * 0.2,
			width : '100%',
			id : i
		});
		LikeProductView.addEventListener('click', function(e) {
			var tmp = e.source.id;
			Ti.App.Properties.setString('selected_item', 'Nokia Phone ' + (tmp + 1));
			var ProductInformationPage = require('ProductInformationPage');
			var productInformationPage = new ProductInformationPage();
			Ti.UI.currentWindow.add(productInformationPage);
		});

		body.add(LikeProductView);

		// Create an ImageView.
		var productImage = Ti.UI.createImageView({
			image : '/images/magento.png',
			width : wdh * 0.3,
			height : hgt * 0.15,
			left : wdh * 0.02,
		});
		productImage.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		LikeProductView.add(productImage);

		var detail = Ti.UI.createView({
			width : wdh * 0.5,
			height : hgt * 0.15,
			left : wdh * 0.35,
			layout : 'vertical',
		});
		LikeProductView.add(detail);

		// Create a Label.
		var categoryText1 = Ti.UI.createLabel({
			text : 'Nokia Phone ' + count,
			color : 'black',
			font : {
				fontSize : font2
			},
			left : 0
		});

		// Add to the parent view.
		detail.add(categoryText1);

		// Create a Label.
		var categoryText2 = Ti.UI.createLabel({
			text : 'Regular $233434',
			color : '#A8A8A8',
			font : {
				fontSize : font3
			},
			left : 0
		});

		// Add to the parent view.
		detail.add(categoryText2);

		// Create a Label.
		var categoryText3 = Ti.UI.createLabel({
			text : 'Special $546565',
			color : '#A8A8A8',
			font : {
				fontSize : font3
			},
			left : 0
		});

		// Add to the parent view.
		detail.add(categoryText3);

		// Create a Label.
		var categoryText4 = Ti.UI.createLabel({
			text : 'Out of stock',
			color : '#A8A8A8',
			font : {
				fontSize : font3
			},
			left : 0
		});

		// Add to the parent view.
		detail.add(categoryText4);

		// Create an ImageView.
		var arrow = Ti.UI.createImageView({
			image : '/images/arrow.png',
			width : wdh * 0.1,
			height : hgt * 0.05,
			right : wdh * 0.02,
			top : hgt * 0.07
		});
		arrow.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		LikeProductView.add(arrow);

	}

	//*************************************************************************Bottom Tabs************************************************************************

	var bottomview = Ti.UI.createView({
		backgroundImage : '/images/footer_bg.png',
		backgroundColor : '#363D40',
		bottom : 0,
		height : '10%',
		width : '100%',
		layout : 'horizontal'
	});
	Allview.add(bottomview);

	var HomeTab = Ti.UI.createView({
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius : border
	});
	HomeTab.addEventListener('click', function() {
		var Home = require('Home');
		var home = new Home();
		Allview.add(home);
		homeicon.image = '/images/home_hover.png';
		Accounticon.image = '/images/user.png';
		Shopicon.image = '/images/eye.png';
		Carticon.image = '/images/cart.png';
		Moreicon.image = '/images/more.png';
		Homelabel.color = 'white';
		Accountlabel.color = '#838383';
		Shoplabel.color = '#838383';
		Cartlabel.color = '#838383';
		Morelabel.color = '#838383';

	});
	bottomview.add(HomeTab);

	// Create an ImageView.
	var homeicon = Ti.UI.createImageView({
		image : '/images/home.png',
		width : '40%',
		height : '50%',
		top : '13%'
	});

	// Add to the parent view.
	HomeTab.add(homeicon);

	// Create a Label.
	var Homelabel = Ti.UI.createLabel({
		text : 'Home',
		color : '#838383',
		font : {
			fontSize : font5
		},
		bottom : '0%',
		textAlign : 'center'
	});

	// Add to the parent view.
	HomeTab.add(Homelabel);

	var AccountTab = Ti.UI.createView({
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius :border
	});
	AccountTab.addEventListener('click', function() {
		var Account = require('Account');
		var account = new Account();
		Allview.add(account);

		homeicon.image = '/images/home.png';
		Accounticon.image = '/images/user_hover.png';
		Shopicon.image = '/images/eye.png';
		Carticon.image = '/images/cart.png';
		Moreicon.image = '/images/more.png';
		Homelabel.color = '#838383';
		Accountlabel.color = 'white';
		Shoplabel.color = '#838383';
		Cartlabel.color = '#838383';
		Morelabel.color = '#838383';

	});
	bottomview.add(AccountTab);

	// Create an ImageView.
	var Accounticon = Ti.UI.createImageView({
		image : '/images/user.png',
		width : '40%',
		height : '50%',
		top : '15%'
	});

	// Add to the parent view.
	AccountTab.add(Accounticon);

	// Create a Label.
	var Accountlabel = Ti.UI.createLabel({
		text : 'Account',
		color : '#838383',
		font : {
			fontSize : font5
		},
		bottom : '2%',
		textAlign : 'center'
	});

	// Add to the parent view.
	AccountTab.add(Accountlabel);

	var ShopTab = Ti.UI.createView({
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius :border
	});
	ShopTab.addEventListener('click', function() {
		var Shop = require('Shop');
		var shop = new Shop();
		Allview.add(shop);

		homeicon.image = '/images/home.png';
		Accounticon.image = '/images/user.png';
		Shopicon.image = '/images/eye_hover.png';
		Carticon.image = '/images/cart.png';
		Moreicon.image = '/images/more.png';
		Homelabel.color = '#838383';
		Accountlabel.color = '#838383';
		Shoplabel.color = 'white';
		Cartlabel.color = '#838383';
		Morelabel.color = '#838383';
	});
	bottomview.add(ShopTab);

	// Create an ImageView.
	var Shopicon = Ti.UI.createImageView({
		image : '/images/eye.png',
		width : '40%',
		height : '50%',
		top : '15%'
	});

	// Add to the parent view.
	ShopTab.add(Shopicon);

	// Create a Label.
	var Shoplabel = Ti.UI.createLabel({
		text : 'Shop',
		color : '#838383',
		font : {
			fontSize : font5
		},
		bottom : '2%',
		textAlign : 'center'
	});

	// Add to the parent view.
	ShopTab.add(Shoplabel);

	var CartTab = Ti.UI.createView({
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius : border
	});
	CartTab.addEventListener('click', function() {
		var Cart = require('Cart');
		var cart = new Cart();
		Allview.add(cart);
		homeicon.image = '/images/home.png';
		Accounticon.image = '/images/user.png';
		Shopicon.image = '/images/eye.png';
		Carticon.image = '/images/cart_hover.png';
		Moreicon.image = '/images/more.png';
		Homelabel.color = '#838383';
		Accountlabel.color = '#838383';
		Shoplabel.color = '#838383';
		Cartlabel.color = 'white';
		Morelabel.color = '#838383';
	});
	bottomview.add(CartTab);

	// Create an ImageView.
	var Carticon = Ti.UI.createImageView({
		image : '/images/cart_hover.png',
		width : '40%',
		height : '50%',
		top : '15%'
	});

	// Add to the parent view.
	CartTab.add(Carticon);

	// Create a Label.
	var Cartlabel = Ti.UI.createLabel({
		text : 'Cart',
		color : 'white',
		font : {
			fontSize : font5
		},
		bottom : '2%',
		textAlign : 'center'
	});

	// Add to the parent view.
	CartTab.add(Cartlabel);

	var MoreTab = Ti.UI.createView({
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius : border
	});
	MoreTab.addEventListener('click', function() {
		var More = require('More');
		var more = new More();
		Allview.add(more);
		homeicon.image = '/images/home.png';
		Accounticon.image = '/images/user.png';
		Shopicon.image = '/images/eye.png';
		Carticon.image = '/images/cart.png';
		Moreicon.image = '/images/more_hover.png';
		Homelabel.color = '#838383';
		Accountlabel.color = '#838383';
		Shoplabel.color = '#838383';
		Cartlabel.color = '#838383';
		Morelabel.color = 'white';
	});
	bottomview.add(MoreTab);

	// Create an ImageView.
	var Moreicon = Ti.UI.createImageView({
		image : '/images/more.png',
		width : '40%',
		height : '50%',
		top : '15%'
	});

	// Add to the parent view.
	MoreTab.add(Moreicon);

	// Create a Label.
	var Morelabel = Ti.UI.createLabel({
		text : 'More',
		color : '#838383',
		font : {
			fontSize : font5
		},
		bottom : '2%',
		textAlign : 'center'
	});

	// Add to the parent view.
	MoreTab.add(Morelabel);

	//********************************************************************check out*************************************************************

	var AllCart = Ti.UI.createView({
		height : '100%',
		width : '100%',
	});

	var AllCartview = Ti.UI.createView({
		backgroundColor : 'black',
		height : '60%',
		width : '100%',
		top : '0%',
		opacity : 0.8
	});
	AllCartview.addEventListener('click', function() {
		Allview.remove(AllCart);
	});

	AllCart.add(AllCartview);

	var AllCartBottomview = Ti.UI.createView({
		backgroundColor : 'white',
		height : '40%',
		width : '100%',
		top : '60%',
	});

	AllCart.add(AllCartBottomview);

	var topCartView = Ti.UI.createView({
		backgroundImage:'/images/header_bg.png',
		backgroundColor : '#5F6465',
		height : '20%',
		width : '100%',
		top : 0
	});

	AllCartBottomview.add(topCartView);

	// Create a Label.
	var shopCartlabel = Ti.UI.createLabel({
		text : 'Checkout',
		color : 'white',
		font : {
			fontSize : font1
		},

		textAlign : 'center'
	});

	// Add to the parent view.
	topCartView.add(shopCartlabel);

	var bottomCartProductView = Ti.UI.createView({
		backgroundColor : '#D3D3D3',
		height : '80%',
		width : '100%',
		top : '20%'
	});
	AllCartBottomview.add(bottomCartProductView);

	// Create a Button.
	var paypalbutton = Ti.UI.createButton({
		backgroundImage : '/images/paypal-button.png',
		height : '25%',
		width : '90%',
		top : '15%',
	});

	// Listen for click events.
	paypalbutton.addEventListener('click', function() {
		Allview.remove(AllCart);
		var Billing = require('Billing');
		var billing = new Billing();
		Ti.UI.currentWindow.add(billing);
	});

	// Add to the parent view.
	bottomCartProductView.add(paypalbutton);

	// Create a Button.
	var standardbutton = Ti.UI.createButton({
		title : 'Standard Checkout',
		font : {
			fontSize : font1,
			fontWeight : 'bold'
		},
		color : 'white',
		backgroundColor : '#FAA21E',
		height : '25%',
		width : '90%',
		bottom : '20%',
	});

	// Listen for click events.
	standardbutton.addEventListener('click', function() {
		Allview.remove(AllCart);
	});

	// Add to the parent view.
	bottomCartProductView.add(standardbutton);

	return Allview;
}

module.exports = Cart;

