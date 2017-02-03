var Gallery = require('./gallery');
var sass = require("../style/main.scss");

//Store mostly config and setup stuff here
var app = {
	imgHome: 'src/img/',
	galleryNodeId: 'gallery-wrapper',

	initialize: function(imageList) {
		var gallery = new Gallery(this.imgHome, document.getElementById(this.galleryNodeId));

		imageList.forEach(function(img) {
			gallery.addImage(img);
		});
	}
};

document.addEventListener("DOMContentLoaded", function(event) {
	var images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'];

    app.initialize(images);
});