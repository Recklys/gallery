var GalleryImage = function(gallery, url) {
	this.gallery = gallery;
	this.url = url;
}
GalleryImage.prototype = {
	wrapperClass: 'gallery-image',

	//Create DOM elements and append to container
	render: function(container) {
		this.wrapper = document.createElement('DIV');
		this.wrapper.className = this.wrapperClass;

		var imgNode = document.createElement('IMG');
		imgNode.src = this.gallery.baseDir + this.url;

		this.wrapper.appendChild(imgNode);
		container.appendChild(this.wrapper);

		this.enableDragAndDrop();
	},

	//Setup events for drag and drop functionality
	enableDragAndDrop: function() {
		//Set selection
		this.wrapper.addEventListener('mousedown', function(e) {
			e.preventDefault();
			this.gallery.setSelection(this);
			this.addClass('selected');
		}.bind(this));

		//Set some visual classes
		this.wrapper.addEventListener('mouseenter', function() {
			if (this.gallery.dragAndDropMode) this.addClass('target');
		}.bind(this));

		//Remove visual classes
		this.wrapper.addEventListener('mouseleave', function() {
			if (this !== this.gallery.getSelection()) {
				this.resetClass();
			}
		}.bind(this));

		//Swap with this image if triggered
		this.wrapper.addEventListener('mouseup', function(e) {
			e.preventDefault();
			this.gallery.swapImage(this);
		}.bind(this));
	},

	getEl: function() {
		return this.wrapper;
	},

	addClass: function(newClass) {
		this.getEl().className = this.getEl().className + ' ' + newClass;
	},

	resetClass: function() {
		this.getEl().className = this.wrapperClass;
	}

}

module.exports = GalleryImage;