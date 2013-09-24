function Billing() {

	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var font2 = (Titanium.Platform.displayCaps.platformHeight * 2.2) / 100;

	var border = (Titanium.Platform.displayCaps.platformHeight * 0.5) / 100;
	var border2 = (Titanium.Platform.displayCaps.platformHeight * 0.8) / 100;

	var wdh = Titanium.Platform.displayCaps.platformWidth;
	var hgt = Titanium.Platform.displayCaps.platformHeight;

	var Allview = Ti.UI.createView({
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

	Allview.add(topView);

	// Create a Button.
	var shopbutton = Ti.UI.createButton({
		backgroundColor : '#212526',
		title : 'Cancel',
		color : 'white',
		height : '70%',
		width : '20%',
		left : '2%',
		borderRadius : border
	});
	// Listen for click events.
	shopbutton.addEventListener('click', function() {
		Ti.UI.currentWindow.remove(Allview);
	});

	// Add to the parent view.
	topView.add(shopbutton);

	// Create a Button.
	var cartbutton = Ti.UI.createButton({
		backgroundColor : '#212526',
		color : 'white',
		title : 'Continue',
		height : '70%',
		width : '25%',
		right : '2%',
		borderRadius : border
	});

	// Listen for click events.
	cartbutton.addEventListener('click', function() {

	});

	// Add to the parent view.
	topView.add(cartbutton);

	// Create a Label.
	var shoplabel = Ti.UI.createLabel({
		text : 'Billing',
		color : 'white',
		font : {
			fontSize : font1
		},
		textAlign : 'center',
		top : '15%'
	});

	// Add to the parent view.
	topView.add(shoplabel);

	// Create a ProgressBar.
	var aProgressBar = Ti.UI.createProgressBar({
		min : 0,
		max : 10,
		value : 0,
		width : '30%',
		height : '40%',
		color : '#E76E01',
		top : '40%'
	});

	// Add to the parent view.
	topView.add(aProgressBar);
	aProgressBar.show();

	// Sample timer to demonstrate ProgressBar functionality.
	var val = 0;
	var interval = setInterval(function() {
		if (val <= 10) {
			aProgressBar.value = val;
			val++;
		} else {
			clearInterval(interval);
		}
	}, 500);

	var body = Ti.UI.createView({
		backgroundColor : '#F3F3F3',
		width : '100%',
		height : '80%',
		top : '10%'
	});
	Allview.add(body);

	var mainView = Ti.UI.createView({
		backgroundColor : 'white',
		width : '90%',
		height : '30%',
		top : '7%',
		borderRadius : border2,
		borderWidth : 2,
		borderColor : '#D5D5D5'
	});
	body.add(mainView);

	// Create a Label.
	var QWlabel = Ti.UI.createLabel({
		text : 'Q W',
		color : 'black',
		font : {
			fontSize : font1,
			fontWeight : 'bold'
		},
		textAlign : 'center',
		left : '2%',
		top : '5%'
	});

	// Add to the parent view.
	mainView.add(QWlabel);

	// Create a Label.
	var QWlabel2 = Ti.UI.createLabel({
		text : 'e \n\n tatty \n\n ttyttyt,45345454\n\n Andorra',
		color : 'black',
		font : {
			fontSize : font2,
			fontWeight : 'bold'
		},

		left : '2%',
		top : '22%'
	});

	// Add to the parent view.
	mainView.add(QWlabel2);

	var mainView2 = Ti.UI.createView({
		backgroundColor : 'white',
		width : '90%',
		height : '10%',
		top : '40%',
		borderRadius : border2,
		borderWidth : 2,
		borderColor : '#D5D5D5'
	});
	body.add(mainView2);

	// Create a Label.
	var Addresslabel = Ti.UI.createLabel({
		text : 'Add New Address',
		color : 'black',
		font : {
			fontSize : font2
		},
		textAlign : 'center',
		left : '2%'
	});

	// Add to the parent view.
	mainView2.add(Addresslabel);

	// Create an ImageView.
	var arrow = Ti.UI.createImageView({
		image : '/images/arrow.png',
		width : wdh * 0.06,
		height : hgt * 0.03,
		right : wdh * 0.02
	});
	arrow.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	mainView2.add(arrow);

	var mainView3 = Ti.UI.createView({
		backgroundColor : 'white',
		width : '90%',
		height : '10%',
		top : '53%',
		borderRadius : border2,
		borderWidth : 2,
		borderColor : '#D5D5D5'
	});
	body.add(mainView3);

	// Create a Label.
	var Addressbooklabel = Ti.UI.createLabel({
		text : 'Select From Address Book',
		color : 'black',
		font : {
			fontSize : font2
		},
		textAlign : 'center',
		left : '2%'
	});

	// Add to the parent view.
	mainView3.add(Addressbooklabel);

	// Create an ImageView.
	var arrow = Ti.UI.createImageView({
		image : '/images/arrow.png',
		width : wdh * 0.06,
		height : hgt * 0.03,
		right : wdh * 0.02
	});
	arrow.addEventListener('load', function() {
		Ti.API.info('Image loaded!');
	});

	// Add to the parent view.
	mainView3.add(arrow);

	return Allview;
}

module.exports = Billing;
