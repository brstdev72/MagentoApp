function FirstView() {

	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var font2 = (Titanium.Platform.displayCaps.platformHeight * 2.5) / 100;
	var font3 = (Titanium.Platform.displayCaps.platformHeight * 2.2) / 100;
	var font4 = (Titanium.Platform.displayCaps.platformHeight * 1.8) / 100;
	var font5 = (Titanium.Platform.displayCaps.platformHeight * 1.5) / 100;
	
	var border = (Titanium.Platform.displayCaps.platformHeight * 0.5) / 100;

	var hgt = Ti.Platform.displayCaps.platformHeight;
	var wdh = Ti.Platform.displayCaps.platformWidth;

	var Allview = Ti.UI.createView({
		top : 0,
		backgroundColor : '#F3F3F3',
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

	// Create an ImageView.
	var aboutimages = Ti.UI.createImageView({
		image : '/images/about-2.png',
		width : '12%',
		height : '70%',
		left : '2%'
	});
	aboutimages.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	topView.add(aboutimages);

	// Create a Button.
	var Login = Ti.UI.createButton({
		backgroundColor : '#212526',
		color : 'white',
		title : 'Login',
		height : '70%',
		width : '20%',
		right : '2%',
		borderRadius : border
	});

	// Listen for click events.
	Login.addEventListener('click', function() {
		alert('\'aButton\' was clicked!');
	});

	// Add to the parent view.
	topView.add(Login);

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
		text : 'Home',
		color : 'white',
		font : {
			fontSize : font1
		},
		left : '48%',
		textAlign : 'center'
	});

	// Add to the parent view.
	topView.add(shoplabel);

	var productView = Ti.UI.createView({
		backgroundColor : '#EDEDED',
		top : '10%',
		height : '60%',
		width : '100%'
	});

	Allview.add(productView);

	// Create an ImageView.
	var mainimage = Ti.UI.createImageView({
		image : '/images/magento.png',
		width : '96%',
		height : '94%',
	});
	mainimage.addEventListener('load', function() {
	});

	// Add to the parent view.
	productView.add(mainimage);

	var productscroll = Ti.UI.createScrollView({
		contentWidth : 'auto',
		contentHeight : 'auto',
		top : '70%',
		height : '30%',
		width : '100%',
		scrollType : 'horizontal',
	});

	Allview.add(productscroll);

	var view = Ti.UI.createView({
		height : '90%',
		width : 940,
		layout : 'horizontal'
	});
	productscroll.add(view);

	var count = 0;

	var colorSet = ["Mobile phone", "Shirts", "shoes", "MP3", "Houses", "chairs"];

	for (var i = 0; i < 10; i++) {

		var data = Ti.UI.createView({
			left : wdh * 0.04,
			height : '100%',
			width : wdh * 0.28,
		});
		view.add(data);

		//	Create an ImageView.
		var smallimage1 = Ti.UI.createImageView({
			image : '/images/magento.png',
			width : '90%',
			height : '75%',
			top : 0,
		});

		// Add to the parent view.
		data.add(smallimage1);

		var Button1 = Ti.UI.createButton({
			backgroundColor : '#D18B00',
			title : colorSet[count],
			height : '15%',
			color : 'white',
			font : {
				fontSize : font4
			},
			width : '100%',
			bottom : '2%',
			borderRadius : border
		});

		// Listen for click events.
		Button1.addEventListener('click', function(e) {
			mainimage.image = '/images/magento.png';
		});

		// Add to the parent view.
		data.add(Button1);
		count++;
		if (count === colorSet.length) {
			count = 0;
		}
	}

	return Allview;
}

module.exports = FirstView;
