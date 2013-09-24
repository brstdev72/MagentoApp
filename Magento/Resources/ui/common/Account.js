function Account() {
	
	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;

	var Allview = Ti.UI.createView({
		backgroundColor : '#F3F3F3',
		height : '90%',
		width : '100%',
		top : 0
	});

	var topView = Ti.UI.createView({
		backgroundImage:'/images/header_bg.png',
		backgroundColor : '#5F6465',
		height : '10%',
		width : '100%',
		top : 0
	});

	Allview.add(topView);

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
		text : 'Account',
		color : 'white',
		font : {
			fontSize : font1
		},
		left : '48%',
		textAlign : 'center'
	});

	// Add to the parent view.
	topView.add(shoplabel);

	return Allview;
}

module.exports = Account;
