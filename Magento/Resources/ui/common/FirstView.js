var Main = Ti.UI.currentWindow;

var font5 = (Titanium.Platform.displayCaps.platformHeight * 1.5) / 100;

var border = (Titanium.Platform.displayCaps.platformHeight * 0.5) / 100;

var Home = require('Home');
var home = new Home();
Main.add(home);

var bottomview = Ti.UI.createView({
	backgroundImage : '/images/footer_bg.png',
	backgroundColor : '#363D40',
	bottom : 0,
	height : '10%',
	width : '100%',
	layout : 'horizontal'
});
Main.add(bottomview);

var HomeTab = Ti.UI.createView({
	top : '4%',
	height : '92%',
	width : '20%',
	borderRadius : border
});
HomeTab.addEventListener('click', function() {
	var home = new Home();
	Main.add(home);
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
	image : '/images/home_hover.png',
	width : '40%',
	height : '50%',
	top : '13%'
});

// Add to the parent view.
HomeTab.add(homeicon);

// Create a Label.
var Homelabel = Ti.UI.createLabel({
	text : 'Home',
	color : 'white',
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
	Main.add(account);

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
	Main.add(shop);

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
	Main.add(cart);
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
	Main.add(more);

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
