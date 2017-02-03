var GalleryImage = require("./gallery-image");

//Initialize with base image dir and DOM node
var Gallery = function(imgDir, node) {
	this.baseDir = imgDir;
	this.root = node;
	this.images = [];

	//Set events for drag and drop 'mode'
	this.root.addEventListener('mousedown', function(e) {
		this.dragAndDropMode = true;
	}.bind(this));

	this.root.addEventListener('mouseup', function(e) {
		this.dragAndDropMode = false;
		this.images.forEach(function(image) { //In case user drops outside gallery, we need to reset everything
			image.resetClass();
		});
		this.clearSelection();
	}.bind(this));
}

//Gallery functions to initialize things
Gallery.prototype = {
	selection: null,

	addImage: function(url) {
		var image = new GalleryImage(this, url);
		this.images.push(image);

		image.render(this.root);
	},

	//Swap current selection with given image (drag and drop)
	swapImage: function(image) {
		if (image && this.selection) {
			var target = image.getEl(),
				targetNext = target.nextElementSibling,
				selected = this.selection.getEl(),
				selectedNext = selected.nextElementSibling;

			//Move selection into place
			if (targetNext) {
				target.parentNode.insertBefore(selected, targetNext);
			} else {
				target.parentNode.appendChild(selected);
			}

			//Move target into place
			if (selectedNext) {
				selectedNext.parentNode.insertBefore(target, selectedNext);
			} else {
				selected.parentNode.appendChild(target);
			}
		}
	},

	getSelection: function() {
		return this.selection;
	},

	setSelection: function(image) {
		if (!this.dragAndDropMode) {
			this.selection = image;
		}
	},

	clearSelection: function() {
		this.selection = null;
	}
}

module.exports = Gallery;