#Image Slider Constructor
###Reusable Javascript Image Slider - Code Snippet

##How it works:
Add an image tag in your html with any class name
```html
<div class="container">
	<img src="" class="slider-images">
</div>
```
Store a list of images as an array
```javascript
var imageArray = new Array("images/img1.jpg", "images/img2.jpg", "images/img3.jpg");
```
Add the image slider constructor
```javascript
function Slider(array, location, interval, fade) {
	var imageCount = array.length,
	counter = 1;
	if (!$.isArray(array)){
		throw new Error ('Thats not an array');
	} else if (array.length <= 0) {
		throw new Error ('Array must have content');
	} else {
		$(location).attr('src', array[0]);
			setInterval(function() {
				$(location).fadeOut(fade, function() {
				$(this).attr('src', array[counter]).fadeIn(fade);
				counter = counter == imageCount - 1 ? 0 : counter += 1;
			});
		}, interval);
	};
}
```
Instantiate the constructor passing in the image array, img class name, interval and fade
```javascript
var nameYourSlider = new Slider(imageArray, '.slider-images', 2500, 500);
```