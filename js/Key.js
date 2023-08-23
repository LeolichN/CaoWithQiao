(function(exports){

	// Singleton
	var Key = {};
	exports.Key = Key;

	// Keycodes to words mapping
	var KEY_CODES = {
		37:"left", 38:"up", 39:"right", 40:"down",
		65:"left", 87:"up", 68:"right", 83:"down",
		16:"slow",
		32:"action", 13:"action",
		27:"pause", 80:"pause"
	};

	// Event Handling
	var onKeyDown = function(event){
		var code = KEY_CODES[event.keyCode];
	    Key[code] = true;
	    if(window.STAGE==4) return;
	    event.stopPropagation();
	    event.preventDefault();
	}
	var onKeyUp = function(event){
		var code = KEY_CODES[event.keyCode];
	    Key[code] = false;
	    if(window.STAGE==4) return;
	    event.stopPropagation();
	    event.preventDefault();
	}
	window.addEventListener("keydown",onKeyDown,false);
	window.addEventListener("keyup",onKeyUp,false);

	btnUp = document.getElementById('upbtn')
	btnUp.addEventListener("mousedown", function() {
		window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':'38'}))
	});
	btnUp.addEventListener("mouseup", function() {
		window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':'38'}))
	});
	btnUp.addEventListener("touchstart", function() {
		window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':'38'}))
	});
	btnUp.addEventListener("touchend", function() {
		window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':'38'}))
	});


	btnDown = document.getElementById('bottombtn')
	btnDown.addEventListener("mousedown", function() {
		window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':'40'}))
	});
	btnDown.addEventListener("mouseup", function() {
		window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':'40'}))
	});
	btnDown.addEventListener("touchstart", function() {
		window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':'40'}))
	});
	btnDown.addEventListener("touchend", function() {
		window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':'40'}))
	});

	btnLeft = document.getElementById('leftbtn')
	btnLeft.addEventListener("mousedown", function() {
		window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':'37'}))
	});
	btnLeft.addEventListener("mouseup", function() {
		window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':'37'}))
	});
	btnLeft.addEventListener("touchstart", function() {
		window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':'37'}))
	});
	btnLeft.addEventListener("touchend", function() {
		window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':'37'}))
	});


	btnRight = document.getElementById('rightbtn')
	btnRight.addEventListener("mousedown", function() {
		window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':'39'}))
	});
	btnRight.addEventListener("mouseup", function() {
		window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':'39'}))
	});
	btnRight.addEventListener("touchstart", function() {
		window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':'39'}))
	});
	btnRight.addEventListener("touchend", function() {
		window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':'39'}))
	});


})(window);
