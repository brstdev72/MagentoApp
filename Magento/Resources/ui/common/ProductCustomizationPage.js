function ProductCustomizationPage() {
	
	
	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var font2 = (Titanium.Platform.displayCaps.platformHeight * 2.5) / 100;
	var font3 = (Titanium.Platform.displayCaps.platformHeight * 2.2) / 100;
	var font4 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var font5 = (Titanium.Platform.displayCaps.platformHeight * 1.5) / 100; 
	
	var border = (Titanium.Platform.displayCaps.platformHeight * 0.5) / 100;
	var border2 = (Titanium.Platform.displayCaps.platformHeight * 0.8) / 100;


	var thisview = Ti.UI.createView({
		backgroundColor : '#F3F3F3',
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

	thisview.add(topView);

	// Create a Button.
	var shopbutton = Ti.UI.createButton({
		backgroundColor : '#212526',
		title : 'Back',
		color : 'white',
		height : '70%',
		width : '15%',
		left : '2%',
		borderRadius : border
	});

	// Listen for click events.
	shopbutton.addEventListener('click', function() {
		Ti.UI.currentWindow.remove(thisview);
	});

	// Add to the parent view.
	topView.add(shopbutton);

	// Create a Button.
	var cartbutton = Ti.UI.createButton({
		backgroundColor : '#E37E33',
		color : 'white',
		title : 'Add to Cart',
		height : '70%',
		width : '30%',
		right : '2%',
		borderRadius : border
	});

	// Listen for click events.
	cartbutton.addEventListener('click', function() {
		var Cart = require('Cart');
		var cart = new Cart();
		thisview.add(cart);

		ShopTab.backgroundColor = '#363D40';
		CartTab.backgroundColor = '#444444';

		Shopicon.image = '/images/eye.png';
		Carticon.image = '/images/cart_hover.png';

		Shoplabel.color = '#838383';
		Cartlabel.color = 'white';
	});

	// Add to the parent view.
	topView.add(cartbutton);

	// Create a Label.
	var shoplabel = Ti.UI.createLabel({
		text : 'Select Options',
		color : 'white',
		font : {
			fontSize : font1
		},
		textAlign : 'center'
	});

	// Add to the parent view.
	topView.add(shoplabel);

	var body = Ti.UI.createView({
		backgroundColor : '#F3F3F3',
		width : '100%',
		height : '80%',
		top : '10%'
	});
	thisview.add(body);

	// Create a Label.
	var configrationlabel = Ti.UI.createLabel({
		text : 'Mobile Configration',
		color : 'black',
		font : {
			fontSize : font3
		},
		left : '2%',
		top : '2%'
	});

	// Add to the parent view.
	body.add(configrationlabel);

	var mainView = Ti.UI.createView({
		width : '90%',
		height : '30%',
		top : '7%',
		borderRadius : border2,
		borderWidth : 2,
		borderColor : '#D5D5D5'
	});
	body.add(mainView);

	var mainViewline = Ti.UI.createView({
		backgroundColor : '#D5D5D5',
		width : '100%',
		height : 2,
		top : '33%',
	});
	mainView.add(mainViewline);

	var mainViewline2 = Ti.UI.createView({
		backgroundColor : '#D5D5D5',
		width : '100%',
		height : 2,
		top : '66%',
	});
	mainView.add(mainViewline2);

	// Create a Label.
	var mobileColor = Ti.UI.createLabel({
		text : 'mobile Color',
		color : 'black',
		font : {
			fontSize : font3
		},
		top : '15%',
		left : '5%',
		textAlign : 'center'
	});

	// Add to the parent view.
	mainView.add(mobileColor);

	// Create a Label.
	var required = Ti.UI.createLabel({
		text : 'Required',
		color : '#550000',
		font : {
			fontSize : font3
		},
		top : '15%',
		right : '5%',
		textAlign : 'center'
	});

	// Add to the parent view.
	mainView.add(required);

	// Create a Label.
	var blackColor = Ti.UI.createLabel({
		text : 'black',
		color : 'black',
		font : {
			fontSize : font3
		},
		top : '45%',
		left : '5%',
		textAlign : 'center'
	});

	// Add to the parent view.
	mainView.add(blackColor);

	// Create a Label.
	var blackColorprice = Ti.UI.createLabel({
		text : '$200,00',
		color : '#E37E33',
		font : {
			fontSize : font3
		},
		top : '45%',
		right : '5%',
		textAlign : 'center'
	});

	// Add to the parent view.
	mainView.add(blackColorprice);

	// Create a Label.
	var whiteColor = Ti.UI.createLabel({
		text : 'white',
		color : 'black',
		font : {
			fontSize : font3
		},
		top : '75%',
		left : '5%',
		textAlign : 'center'
	});

	// Add to the parent view.
	mainView.add(whiteColor);

	// Create a Label.
	var whiteColorprice = Ti.UI.createLabel({
		text : '$100,00',
		color : '#E37E33',
		font : {
			fontSize : font3
		},
		top : '75%',
		right : '5%',
		textAlign : 'center'
	});

	// Add to the parent view.
	mainView.add(whiteColorprice);

	//*************************************************************************Bottom Tabs************************************************************************

	var bottomview = Ti.UI.createView({
		backgroundImage : '/images/footer_bg.png',
		backgroundColor : '#363D40',
		bottom : 0,
		height : '10%',
		width : '100%',
		layout : 'horizontal'
	});
	thisview.add(bottomview);

	var HomeTab = Ti.UI.createView({
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius :border
	});
	HomeTab.addEventListener('click', function() {
		var Home = require('Home');
		var home = new Home();
		thisview.add(home);

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
		borderRadius : border
	});
	AccountTab.addEventListener('click', function() {
		var Account = require('Account');
		var account = new Account();
		thisview.add(account);

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
		borderRadius : border
	});
	ShopTab.addEventListener('click', function() {
		var Shop = require('Shop');
		var shop = new Shop();
		thisview.add(shop);

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
		image : '/images/eye_hover.png',
		width : '40%',
		height : '50%',
		top : '15%'
	});

	// Add to the parent view.
	ShopTab.add(Shopicon);

	// Create a Label.
	var Shoplabel = Ti.UI.createLabel({
		text : 'Shop',
		color : 'white',
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
		thisview.add(cart);

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
		image : '/images/cart.png',
		width : '40%',
		height : '50%',
		top : '15%'
	});

	// Add to the parent view.
	CartTab.add(Carticon);

	// Create a Label.
	var Cartlabel = Ti.UI.createLabel({
		text : 'Cart',
		color : '#838383',
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
		thisview.add(more);

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

	return thisview;
}

module.exports = ProductCustomizationPage;
