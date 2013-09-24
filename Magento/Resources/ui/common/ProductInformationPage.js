function ProductInformationPage() {

	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var font2 = (Titanium.Platform.displayCaps.platformHeight * 2.5) / 100;
	var font3 = (Titanium.Platform.displayCaps.platformHeight * 2.2) / 100;
	var font4 = (Titanium.Platform.displayCaps.platformHeight * 1.8) / 100;
	var font5 = (Titanium.Platform.displayCaps.platformHeight * 1.5) / 100;
	
	var border = (Titanium.Platform.displayCaps.platformHeight * 0.5) / 100;
	var border2 = (Titanium.Platform.displayCaps.platformHeight * 0.8) / 100;

	var click = 0;

	var Allview = Ti.UI.createView({
		backgroundColor : '#E73A2F',
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
		title : 'Back',
		color : 'white',
		height : '70%',
		width : '15%',
		left : '2%',
		borderRadius : border
	});

	// Listen for click events.
	shopbutton.addEventListener('click', function() {
		Ti.UI.currentWindow.remove(Allview);
	});

	// Add to the parent view.
	topView.add(shopbutton);

	var selected_item = Ti.App.Properties.getString('selected_item');

	// Create a Label.
	var shoplabel = Ti.UI.createLabel({
		text : selected_item,
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
	Allview.add(body);

	// Create an ImageView.
	var productImage = Ti.UI.createImageView({
		image : '/images/magento.png',
		width : '40%',
		height : '30%',
		top : '5%',
		left : '5%'
	});
	productImage.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	body.add(productImage);

	// Create a Label.
	var ProductPrice = Ti.UI.createLabel({
		text : '$545,5454',
		color : '#E76E01',
		font : {
			fontSize : font1
		},
		top : '5%',
		left : '48%'
	});

	// Add to the parent view.
	body.add(ProductPrice);

	// Create a Label.
	var ProductInStock = Ti.UI.createLabel({
		text : 'In Stock',
		color : '#000',
		font : {
			fontSize : font4
		},
		top : '10%',
		left : '48%'
	});

	// Add to the parent view.
	body.add(ProductInStock);

	// Create a TextField.
	var quantityEditText = Ti.UI.createTextField({
		value : '0',
		height : '9%',
		width : '12%',
		right : '8%',
		top : '17%',
		font : {
			fontSize : font4,
		},
		editable : false,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// Add to the parent view.
	body.add(quantityEditText);

	// Create a Button.
	var AddtoCart = Ti.UI.createButton({
		backgroundColor : '#E37E33',
		title : 'Add to Cart',
		height : '8%',
		width : '40%',
		color : 'white',
		font : {
			fontSize : font1,
			fontWeight : 'bold'
		},
		top : '27%',
		right : '8%',
		borderRadius : border
	});

	// Listen for click events.

	AddtoCart.addEventListener('click', function() {

		Allview.add(AllCart);
		AllCart.add(AllCartButtonview);
	});

	// Add to the parent view.
	body.add(AddtoCart);

	// Create a Label.
	var productlabel = Ti.UI.createLabel({
		text : selected_item,
		color : 'black',
		font : {
			fontSize : font3
		},
		left : '2%',
		top : '38%'
	});

	// Add to the parent view.
	body.add(productlabel);

	var bottomCartView = Ti.UI.createView({
		backgroundColor : '#D3D3D3',
		height : '50%',
		width : '100%',
		bottom : '5%'
	});

	body.add(bottomCartView);

	var bottomproductView = Ti.UI.createView({
		height : '60%',
		width : '100%',
		top : '0%'
	});
	bottomproductView.addEventListener('click', function() {
		var ProductCustomizationPage = require('ProductCustomizationPage');
		var productCustomizationPage = new ProductCustomizationPage();
		Ti.UI.currentWindow.add(productCustomizationPage);
	});

	bottomCartView.add(bottomproductView);

	// Create a Label.
	var productlabel = Ti.UI.createLabel({
		text : selected_item,
		color : 'black',
		font : {
			fontSize : font4
		},
		left : '2%',
	});

	// Add to the parent view.
	bottomproductView.add(productlabel);

	// Create an ImageView.
	var arrowView = Ti.UI.createImageView({
		image : '/images/arrow.png',
		width : '10%',
		height : '15%',
		right : '1%'
	});

	bottomproductView.add(arrowView);

	var bottomuserView = Ti.UI.createView({
		backgroundColor : '#EA8838',
		height : '20%',
		width : '100%',
		top : '60%'
	});

	// Add to the parent view.
	bottomCartView.add(bottomuserView);

	var userView1 = Ti.UI.createView({
		backgroundColor : '#E27A2E',
		height : '100%',
		width : '33%',
		left : '0%',
		layout : 'horizontal'
	});

	// Add to the parent view.
	bottomuserView.add(userView1);

	var quantityImage = Ti.UI.createImageView({
		image : '/images/gallery.png',
		width : '35%',
		height : '90%',
	});
	quantityImage.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	userView1.add(quantityImage);

	// Create a Label.
	var quantityLabel = Ti.UI.createLabel({
		text : 'View Quantity',
		color : 'white',
		font : {
			fontSize : font4,
		}
	});

	// Add to the parent view.
	userView1.add(quantityLabel);

	var userView2 = Ti.UI.createView({
		backgroundColor : '#E27A2E',
		height : '100%',
		width : '33%',
		layout : 'horizontal'
	});

	// Add to the parent view.
	bottomuserView.add(userView2);

	var friendImage = Ti.UI.createImageView({
		image : '/images/msg.png',
		width : '35%',
		height : '90%',
	});
	friendImage.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	userView2.add(friendImage);

	// Create a Label.
	var friendLabel = Ti.UI.createLabel({
		text : 'Tell a Friend',
		color : 'white',
		font : {
			fontSize : font4,
		}
	});

	// Add to the parent view.
	userView2.add(friendLabel);

	var userView3 = Ti.UI.createView({
		backgroundColor : '#E27A2E',
		height : '100%',
		width : '33%',
		right : '0%',
		layout : 'horizontal'
	});

	// Add to the parent view.
	bottomuserView.add(userView3);

	var wishlistImage = Ti.UI.createImageView({
		image : '/images/star.png',
		width : '35%',
		height : '90%',
	});
	wishlistImage.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	userView3.add(wishlistImage);

	// Create a Label.
	var wishlistLabel = Ti.UI.createLabel({
		text : 'Add to \nWishlist',
		color : 'white',
		font : {
			fontSize : font4,
		},
		left : '5%'
	});

	// Add to the parent view.
	userView3.add(wishlistLabel);

	var bottomratingView = Ti.UI.createView({
		height : '20%',
		width : '100%',
		top : '80%',
		layout : 'horizontal'
	});

	// Add to the parent view.
	bottomCartView.add(bottomratingView);

	// Create a Label.
	var ratingLabel = Ti.UI.createLabel({
		text : 'Rating and Reviews',
		color : '#E27A2E',
		font : {
			fontSize : font2,
		},
		left : '2%',
		top : '25%'
	});

	// Add to the parent view.
	bottomratingView.add(ratingLabel);

	var ratingImage = Ti.UI.createImageView({
		image : '/images/Rating_stars.png',
		width : '20%',
		height : '40%',
		left : '28%',
		top : '25%'
	});
	wishlistImage.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	bottomratingView.add(ratingImage);

	// Create a Label.
	var ratingitemLabel = Ti.UI.createLabel({
		text : '(0)',
		color : 'black',
		font : {
			fontSize : font3,
		},
		top : '28%',
		left : '2%'
	});

	// Add to the parent view.
	bottomratingView.add(ratingitemLabel);

	//*************************************************************************Bottom Tabs************************************************************************

	var bottomview = Ti.UI.createView({
		backgroundColor : '#363D40',
		bottom : 0,
		height : '10%',
		width : '100%',
		layout : 'horizontal'
	});
	Allview.add(bottomview);

	var HomeTab = Ti.UI.createView({
		backgroundColor : '#363D40',
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius : border
	});
	HomeTab.addEventListener('click', function() {
		var Home = require('Home');
		var home = new Home();
		Allview.add(home);
		HomeTab.backgroundColor = '#444444';
		AccountTab.backgroundColor = '#363D40';
		ShopTab.backgroundColor = '#363D40';
		CartTab.backgroundColor = '#363D40';
		MoreTab.backgroundColor = '#363D40';
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
		backgroundColor : '#363D40',
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius : border
	});
	AccountTab.addEventListener('click', function() {
		var Account = require('Account');
		var account = new Account();
		Allview.add(account);

		HomeTab.backgroundColor = '#363D40';
		AccountTab.backgroundColor = '#444444';
		ShopTab.backgroundColor = '#363D40';
		CartTab.backgroundColor = '#363D40';
		MoreTab.backgroundColor = '#363D40';
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
		backgroundColor : '#444444',
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius : border
	});
	ShopTab.addEventListener('click', function() {
		var Shop = require('Shop');
		var shop = new Shop();
		Allview.add(shop);

		HomeTab.backgroundColor = '#363D40';
		AccountTab.backgroundColor = '#363D40';
		ShopTab.backgroundColor = '#444444';
		CartTab.backgroundColor = '#363D40';
		MoreTab.backgroundColor = '#363D40';
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
		backgroundColor : '#363D40',
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius : border
	});
	CartTab.addEventListener('click', function() {
		var Cart = require('Cart');
		var cart = new Cart();
		Allview.add(cart);
		HomeTab.backgroundColor = '#363D40';
		AccountTab.backgroundColor = '#363D40';
		ShopTab.backgroundColor = '#363D40';
		CartTab.backgroundColor = '#444444';
		MoreTab.backgroundColor = '#363D40';
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
		backgroundColor : '#363D40',
		top : '4%',
		height : '92%',
		width : '20%',
		borderRadius : border
	});
	MoreTab.addEventListener('click', function() {
		var More = require('More');
		var more = new More();
		Allview.add(more);

		HomeTab.backgroundColor = '#363D40';
		AccountTab.backgroundColor = '#363D40';
		ShopTab.backgroundColor = '#363D40';
		CartTab.backgroundColor = '#363D40';
		MoreTab.backgroundColor = '#444444';
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

	//**************************************************************************Add To Cart *********************************************************************

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
		AllCart.remove(AllCartButtonview);
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
		backgroundImage : '/images/header_bg.png',
		backgroundColor : '#5F6465',
		height : '20%',
		width : '100%',
		top : 0
	});

	AllCartBottomview.add(topCartView);

	// Create a Label.
	var shopCartlabel = Ti.UI.createLabel({
		text : 'Product Added to Cart',
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
		height : '55%',
		width : '100%',
		top : '20%'
	});
	AllCartBottomview.add(bottomCartProductView);

	// Create an ImageView.
	var productcartImage = Ti.UI.createImageView({
		image : '/images/magento.png',
		width : '30%',
		height : '70%',
		left : '5%'
	});
	productcartImage.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	bottomCartProductView.add(productcartImage);

	// Create a Label.
	var productCartlabel = Ti.UI.createLabel({
		text : selected_item,
		color : 'black',
		font : {
			fontSize : font3
		},
		left : '45%',
		top : '15%'
	});

	// Add to the parent view.
	bottomCartProductView.add(productCartlabel);

	// Create a Label.
	var quantityCartlabel = Ti.UI.createLabel({
		text : 'Quantity: ' + click,
		color : '#E37E33',
		font : {
			fontSize : font3
		},
		left : '45%',
		top : '28%'
	});

	// Add to the parent view.
	bottomCartProductView.add(quantityCartlabel);

	var AllCartButtonview = Ti.UI.createView({
		backgroundColor : 'white',
		height : '25%',
		width : '100%',
		bottom : 0
	});

	AllCartBottomview.add(AllCartButtonview);
	// Create a Button.
	var Continue = Ti.UI.createButton({
		backgroundColor : '#E37E33',
		title : 'Continue',
		height : '70%',
		width : '38%',
		color : 'white',
		font : {
			fontSize : font1,
			fontWeight : 'bold'
		},
		bottom : '15%',
		left : '8%',
		borderRadius : border
	});

	// Listen for click events.

	Continue.addEventListener('click', function() {
		click++
		quantityEditText.value = click;
		ratingitemLabel.text = '(' + click + ')';
		Allview.remove(AllCart);
		AllCart.remove(AllCartButtonview);
	});

	// Add to the parent view.
	AllCartButtonview.add(Continue);

	// Create a Button.
	var ViewCart = Ti.UI.createButton({
		backgroundColor : '#E37E33',
		title : 'View Cart',
		height : '70%',
		width : '38%',
		color : 'white',
		font : {
			fontSize : font1,
			fontWeight : 'bold'
		},
		bottom : '15%',
		right : '8%',
		borderRadius : border
	});

	// Listen for click events.

	ViewCart.addEventListener('click', function() {
		var Cart = require('Cart');
		var cart = new Cart();
		Allview.add(cart);
		Allview.remove(AllCart);
		AllCart.remove(AllCartButtonview);

		ShopTab.backgroundColor = '#363D40';
		CartTab.backgroundColor = '#444444';

		Shopicon.image = '/images/eye.png';
		Carticon.image = '/images/cart_hover.png';

		Shoplabel.color = '#838383';
		Cartlabel.color = 'white';

	});

	// Add to the parent view.
	AllCartButtonview.add(ViewCart);

	return Allview;
}

module.exports = ProductInformationPage;
