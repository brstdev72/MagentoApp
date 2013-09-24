function ProductListing() {

	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var font2 = (Titanium.Platform.displayCaps.platformHeight * 2.5) / 100;
	var font3 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
	var font4 = (Titanium.Platform.displayCaps.platformHeight * 1.8) / 100;
	var font5 = (Titanium.Platform.displayCaps.platformHeight * 1.5) / 100;

	var border = (Titanium.Platform.displayCaps.platformHeight * 0.5) / 100;
	var border2 = (Titanium.Platform.displayCaps.platformHeight * 0.8) / 100;

	var hgt = Ti.Platform.displayCaps.platformHeight;
	var wdh = Ti.Platform.displayCaps.platformWidth;

	var Allview = Ti.UI.createView({
		top : 0,
		backgroundColor : '#E73A2F',
		height : '90%',
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
		title : 'categories',
		color : 'white',
		height : '70%',
		width : '27%',
		left : '2%',
		borderRadius : border
	});

	// Listen for click events.
	shopbutton.addEventListener('click', function() {
		Ti.UI.currentWindow.remove(Allview);
	});

	// Add to the parent view.
	topView.add(shopbutton);

	// Create a Label.
	var shoplabel = Ti.UI.createLabel({
		text : 'Product Listing',
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
		height : '90%',
		top : '10%'
	});
	Allview.add(body);

	var bodyTop = Ti.UI.createView({
		backgroundColor : '#B1B1B1',
		width : '100%',
		height : '10%',
		top : 0
	});
	body.add(bodyTop);

	// Create a Label.
	var shoplabel = Ti.UI.createLabel({
		text : 'Sort BY :',
		color : 'black',
		font : {
			fontSize : font3,
			fontweight : 'bold'
		},
		left : '5%',
		textAlign : 'center'
	});

	// Add to the parent view.
	bodyTop.add(shoplabel);

	var SortBy = Ti.UI.createView({
		backgroundColor : '#D5D5D5',
		width : '70%',
		height : '80%',
		right : '2%',
		borderColor : '#D5D5D5',
		borderRadius : 1,
		borderWidth : 3
	});
	bodyTop.add(SortBy);

	// Create a Button.
	var position = Ti.UI.createButton({
		backgroundColor : '#E76E01',
		title : 'Position',
		height : '94%',
		color : 'white',
		width : '32%',
		left : '1%'
	});

	// Listen for click events.
	position.addEventListener('click', function() {
		position.backgroundColor = '#E76E01'
		name.backgroundColor = '#8D8D8D'
		price.backgroundColor = '#8D8D8D'
	});

	// Add to the parent view.
	SortBy.add(position);

	// Create a Button.
	var name = Ti.UI.createButton({
		backgroundColor : '#8D8D8D',
		title : 'Name',
		color : 'white',
		height : '94%',
		width : '32.5%',
	});

	// Listen for click events.
	name.addEventListener('click', function() {
		position.backgroundColor = '#8D8D8D'
		name.backgroundColor = '#E76E01'
		price.backgroundColor = '#8D8D8D'
	});

	// Add to the parent view.
	SortBy.add(name);

	// Create a Button.
	var price = Ti.UI.createButton({
		backgroundColor : '#8D8D8D',
		title : 'Price',
		color : 'white',
		height : '94%',
		width : '32%',
		right : '1%'
	});

	// Listen for click events.
	price.addEventListener('click', function() {
		position.backgroundColor = '#8D8D8D'
		name.backgroundColor = '#8D8D8D'
		price.backgroundColor = '#E76E01'
	});

	// Add to the parent view.
	SortBy.add(price);

	var tableData = [];

	var count = 1;

	var removetmp;

	var thisRow = [];

	for (var y = 0; y < 6; y++) {

		var tmp_click_row;

		thisRow[y] = Ti.UI.createTableViewRow({
			height : Ti.UI.SIZE,
			backgroundColor : '#D3D3D3'
		});
		thisRow[y].addEventListener('click', function(e) {
			if (removetmp != undefined) {
				thisRow[removetmp].remove(orangeView);
			}
			tmp_click_row = e.index;
			thisRow[tmp_click_row].add(orangeView);
			removetmp = tmp_click_row;
		});

		thisRow[y].addEventListener('swipe', function(e) {
			var tmp = e.index;
			if (e.direction == 'left') {
			} else if (e.direction == 'right') {
				Ti.App.Properties.setString('selected_item', 'Nokia Phone ' + (tmp + 1));
				var ProductInformationPage = require('ProductInformationPage');
				var productInformationPage = new ProductInformationPage();
				Ti.UI.currentWindow.add(productInformationPage);
			}
		});

		var ProductDetailView = Ti.UI.createView({
			width : wdh,
			height : hgt * 0.2,
			top : 0,
		});

		thisRow[y].add(ProductDetailView);

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
		ProductDetailView.add(productImage);

		var detail = Ti.UI.createView({
			width : wdh * 0.5,
			height : hgt * 0.15,
			left : wdh * 0.35,
			layout : 'vertical',
		});
		ProductDetailView.add(detail);

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
		ProductDetailView.add(arrow);

		var orangeView = Ti.UI.createView({
			backgroundColor : '#E76E01',
			width : wdh,
			height : hgt * 0.15,
			top : hgt * 0.2,
			layout : 'horizontal'
		});

		var Viewquantity = Ti.UI.createView({
			width : '20%',
			height : '80%',
			top : '10%'
		});
		orangeView.add(Viewquantity);

		// Create an ImageView.
		var quantityImage = Ti.UI.createImageView({
			image : '/images/gallery.png',
			width : '50%',
			height : '50%',
			top : '0%',
		});
		quantityImage.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		Viewquantity.add(quantityImage);

		// Create a Label.
		var quantityLabel = Ti.UI.createLabel({
			text : 'View Quantity',
			color : 'white',
			font : {
				fontSize : font4,
				fontWeight : 'bold'
			},
			top : '60%',
			textAlign : 'center',
			left : '15%',
			right : '15%'
		});

		// Add to the parent view.
		Viewquantity.add(quantityLabel);

		var friend = Ti.UI.createView({
			width : '20%',
			height : '80%',
			top : '10%'
		});
		orangeView.add(friend);

		// Create an ImageView.
		var friendImage = Ti.UI.createImageView({
			image : '/images/msg.png',
			width : '50%',
			height : '50%',
			top : '0%',
		});
		friendImage.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		friend.add(friendImage);

		// Create a Label.
		var friendLabel = Ti.UI.createLabel({
			text : 'Tell a Friend',
			color : 'white',
			font : {
				fontSize : font4,
				fontWeight : 'bold'
			},
			top : '60%',
			textAlign : 'center',
			left : '20%',
			right : '20%'
		});

		// Add to the parent view.
		friend.add(friendLabel);

		var wishlist = Ti.UI.createView({
			width : '20%',
			height : '80%',
			top : '10%'
		});
		orangeView.add(wishlist);

		// Create an ImageView.
		var wishlistImage = Ti.UI.createImageView({
			image : '/images/star.png',
			width : '50%',
			height : '50%',
			top : '0%',
		});
		wishlistImage.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		wishlist.add(wishlistImage);

		// Create a Label.
		var wishlistLabel = Ti.UI.createLabel({
			text : 'Add to Wishlist',
			color : 'white',
			font : {
				fontSize : font4,
				fontWeight : 'bold'
			},
			top : '60%',
			textAlign : 'center',
			left : '15%',
			right : '15%'
		});

		// Add to the parent view.
		wishlist.add(wishlistLabel);

		var addcart = Ti.UI.createView({
			width : '20%',
			height : '80%',
			top : '10%',
		});
		addcart.addEventListener('click', function(e) {
			Ti.App.Properties.setString('selected_item', 'Nokia Phone ' + (tmp_click_row + 1));
			var ProductInformationPage = require('ProductInformationPage');
			var productInformationPage = new ProductInformationPage();
			Ti.UI.currentWindow.add(productInformationPage);
		});

		orangeView.add(addcart);

		// Create an ImageView.
		var addcartImage = Ti.UI.createImageView({
			image : '/images/add_cart.png',
			width : '50%',
			height : '50%',
			top : '0%',
		});
		addcartImage.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		addcart.add(addcartImage);

		// Create a Label.
		var addcartLabel = Ti.UI.createLabel({
			text : 'Add to Cart',
			color : 'white',
			font : {
				fontSize : font4,
				fontWeight : 'bold'
			},
			top : '60%',
			textAlign : 'center',
			left : '20%',
			right : '20%'
		});

		// Add to the parent view.
		addcart.add(addcartLabel);

		var showdetailview = Ti.UI.createView({
			width : '20%',
			height : '80%',
			top : '10%',
		});
		showdetailview.addEventListener('click', function(e) {
			Ti.App.Properties.setString('selected_item', 'Nokia Phone ' + (tmp_click_row + 1));
			var ProductInformationPage = require('ProductInformationPage');
			var productInformationPage = new ProductInformationPage();
			Ti.UI.currentWindow.add(productInformationPage);
		});
		orangeView.add(showdetailview);

		// Create an ImageView.
		var showdetailImage = Ti.UI.createImageView({
			image : '/images/eye_cart.png',
			width : '50%',
			height : '50%',
			top : '0%',
		});
		showdetailImage.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		showdetailview.add(showdetailImage);

		// Create a Label.
		var showdetailLabel = Ti.UI.createLabel({
			text : 'View Detail',
			color : 'white',
			font : {
				fontSize : font4,
				fontWeight : 'bold'
			},
			top : '60%',
			textAlign : 'center',
			left : '15%',
			right : '15%'
		});

		// Add to the parent view.
		showdetailview.add(showdetailLabel);

		tableData.push(thisRow[y]);
		count++;
	}

	var tableview = Ti.UI.createTableView({
		top : '10%',
		data : tableData
	});

	tableview.addEventListener("click", function(e) {
		if (e.source.objName) {
			Ti.API.info("---> " + e.source.objName + e.source.objIndex + " was clicked!");
		}
	});

	body.add(tableview);

	return Allview;
}

module.exports = ProductListing;
