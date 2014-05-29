

var imageArray = new Array("images/img1.jpg", "images/img2.jpg", "images/img3.jpg");

function Slider(array, location, interval, fade, height) {
	var imageCount = array.length,
	counter = 1;
	if (!$.isArray(array)){
		throw new Error ('Thats not an array');
	} else if (array.length <= 0) {
		throw new Error ('Array must have content');
	} else {
		$(location).attr('src', array[0]);
		$(location).attr('height', height);
			setInterval(function() {
				$(location).fadeOut(fade, function() {
				$(this).attr('src', array[counter]).fadeIn(fade);
				counter = counter == imageCount - 1 ? 0 : counter += 1;
				$(this).attr('height', height)
			});
		}, interval);
	};
}

var nameYourSlider = new Slider(imageArray, '.slider-images', 2500, 500, '100px');

//Includes height

// function Slider(array, location, interval, fade, height) {
// 	var imageCount = array.length,
// 	counter = 1;
// 	if (!$.isArray(array)){
// 		throw new Error ('Thats not an array');
// 	} else if (array.length <= 0) {
// 		throw new Error ('Array must have content');
// 	} else {
// 		$(location).attr('src', array[0]);
// 		$(location).attr('height', height)
// 			setInterval(function() {
// 				$(location).fadeOut(fade, function() {
// 				$(this).attr('src', array[counter]).fadeIn(fade);
// 				counter = counter == imageCount - 1 ? 0 : counter += 1;
// 				$(this).attr('height', height)
// 			});
// 		}, interval);
// 	};
// }

// var nameYourSlider = new Slider(imageArray, '.slider-images', 2500, 500, '100px');