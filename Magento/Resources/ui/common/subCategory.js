function SubCategory() {

	var font1 = (Titanium.Platform.displayCaps.platformHeight * 3) / 100;
	var font2 = (Titanium.Platform.displayCaps.platformHeight * 2.5) / 100;
	var font3 = (Titanium.Platform.displayCaps.platformHeight * 2.2) / 100;
	var font4 = (Titanium.Platform.displayCaps.platformHeight * 2) / 100;
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
		title : 'shop',
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

	// Create a Label.
	var shoplabel = Ti.UI.createLabel({
		text : 'Sub Category',
		color : 'white',
		font : {
			fontSize : font1
		},
		textAlign : 'center'
	});

	// Add to the parent view.
	topView.add(shoplabel);

	var body = Ti.UI.createView({
		backgroundImage : '/images/magento.png',
		width : '94%',
		height : '90%',
		top : '10%'
	});
	Allview.add(body);

	// to fit in a 320-wide space

	var tableData = [];

	var count = 1;

	for (var y = 0; y < 6; y++) {
		var thisRow = Ti.UI.createTableViewRow({
			height : hgt * 0.1,
		});
		thisRow.addEventListener('click', function(e) {
			var ProductListing = require('ProductListing');
			var productListing = new ProductListing();
			Ti.UI.currentWindow.add(productListing);
		});

		// Create a Label.
		var categoryText = Ti.UI.createLabel({
			text : 'categoryText ' + count,
			color : 'white',
			font : {
				fontSize : font1
			},
			left : wdh * 0.05,
			textAlign : 'center'
		});

		// Add to the parent view.
		thisRow.add(categoryText);

		// Create an ImageView.
		var arrow = Ti.UI.createImageView({
			image : '/images/arrow.png',
			width : wdh * 0.1,
			height : hgt * 0.05,
			right : wdh * 0.05
		});
		arrow.addEventListener('load', function() {
			Ti.API.info('Image loaded!');
		});

		// Add to the parent view.
		thisRow.add(arrow);

		tableData.push(thisRow);

		count++;
	}

	var tableview = Ti.UI.createTableView({
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

module.exports = SubCategory;
