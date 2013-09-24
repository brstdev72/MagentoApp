function Shop() {

	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var font2 = (Titanium.Platform.displayCaps.platformHeight * 2.5) / 100;
	var font3 = (Titanium.Platform.displayCaps.platformHeight * 2.2) / 100;
	var font4 = (Titanium.Platform.displayCaps.platformHeight * 1.8) / 100;
	var font5 = (Titanium.Platform.displayCaps.platformHeight * 1.5) / 100;

	var border = (Titanium.Platform.displayCaps.platformHeight * 0.5) / 100;
	var border2 = (Titanium.Platform.displayCaps.platformHeight * 0.8) / 100;

	var hgt = Ti.Platform.displayCaps.platformHeight;
	var wdh = Ti.Platform.displayCaps.platformWidth;

	var Allview = Ti.UI.createView({
		backgroundImage : '/images/magento.png',
		height : '90%',
		width : '100%',
		top : 0
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
		text : 'Shop',
		color : 'white',
		font : {
			fontSize : font1
		},
		left : '48%',
		textAlign : 'center'
	});

	// Add to the parent view.
	topView.add(shoplabel);

	var body = Ti.UI.createView({
		backgroundImage : '/images/magento.png',
		width : '100%',
		height : '90%',
		top : '10%'
	});
	Allview.add(body);

	// to fit in a 320-wide space

	var tableData = [];

	var colorSet = ["Mobile phone", "Shirts", "shoes", "MP3", "Houses", "chairs"];

	var colorSetIndex = 0;
	var cellIndex = 0;

	for (var y = 0; y < 6; y++) {
		var thisRow = Ti.UI.createTableViewRow({
			layout : "horizontal",
			height : hgt * 0.25
		});
		for (var x = 0; x < 3; x++) {
			var thisView = Ti.UI.createView({
				backgroundColor : 'white',
				left : wdh * 0.05,
				height : hgt * 0.23,
				width : wdh * 0.27
			});
			thisView.addEventListener('click', function() {
				var SubCategory = require('subCategory');
				var subCategory = new SubCategory();
				Ti.UI.currentWindow.add(subCategory);
			});
			thisRow.add(thisView);

			// Create an ImageView.
			var smallimage1 = Ti.UI.createImageView({
				image : '/images/magento.png',
				width : '80%',
				height : '70%',
				bottom : '23%'
			});

			// Add to the parent view.
			thisView.add(smallimage1);

			var Button1 = Ti.UI.createButton({
				backgroundColor : '#D18B00',
				title : colorSet[colorSetIndex],
				height : '15%',
				color : 'white',
				font : {
					fontSize : font4
				},
				width : '90%',
				bottom : '4%',
				left : '5%',
				borderRadius : border,
				id : cellIndex
			});

			// Listen for click events.
			Button1.addEventListener('click', function(e) {

			});

			// Add to the parent view.
			thisView.add(Button1);
			cellIndex++;
			colorSetIndex++;
			if (colorSetIndex === colorSet.length) {
				colorSetIndex = 0;
			}
		}
		tableData.push(thisRow);
	}
	var tableview = Ti.UI.createTableView({
		separatorColor : 'transparent',
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

module.exports = Shop;

