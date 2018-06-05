# Depreciated
Do not use this, first off jQuery is dead, secondly the [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is a better option.

# inView

v1.1.0

A small jQuery plugin that detects when an element enters the viewport.

## Table of Contents
- [Importing](#importing)
- [Use](#use)
	- [HTML Use](#html-use)
	- [JavaScript Use](#javascript-use)
	- [jQuery Use](#jquery-use)
- [Examples](#examples)
- [License](#license)

## Importing
This is a [jQuery](http://jquery.com/) plugin so jQuery **must** be imported before the plugin.

Import "inView.js" into the document, this script can be found in the "src" directory of this repository.

	<head>
	  <script src='http://code.jquery.com/jquery-2.1.1.min.js'></script>
	  <script src='path/to/src/inView.js'></script>
	</head>

## Use

### HTML Use
This plugin can be initiated using only HTML, you will still need JavaScript to define the handler.

	<head>
	  <script src='http://code.jquery.com/jquery-2.1.1.min.js'></script>
	  <script src='path/to/src/inView.js'></script>
	</head>
	<body>
	  <!-- A bunch of stuff here -->
	  <div data-inview='alert("The element is in view")'>Can you see me?</div>
	</body>

### JavaScript Use
To use this plugin, after DOM ready, use the ``inView(selector, handler)`` global function passing it your jQuery Selector and your handler.

	<head>
	  <script src='http://code.jquery.com/jquery-2.1.1.min.js'></script>
	  <script src='path/to/src/inView.js'></script>
	  <script>
		$(function(){ // After DOM ready
		  inView("#myElem", function(){
		    alert("The element is in view");
		  });
		});
	  </script>
	</head>
	<body>
	  <!-- A bunch of stuff here -->
	  <div id='myElem'>Can you see me?</div>
	</body>

### jQuery Use
To use this plugin, after DOM ready, use jquery to select the element you wish to target, then call the ``inView`` method on it passing it your callback function.

	<head>
	  <script src='http://code.jquery.com/jquery-2.1.1.min.js'></script>
	  <script src='path/to/src/inView.js'></script>
	  <script>
		$(function(){ // After DOM ready
		  $("#myElem").inView(function(){
		    alert("The element is in view");
		  });
		});
	  </script>
	</head>
	<body>
	  <!-- A bunch of stuff here -->
	  <div id='myElem'>Can you see me?</div>
	</body>

##E xamples

###[ HTML Usage](examples/usage-html.html)
A Basic example showing the HTML usage.

### [JavaScript Usage](examples/usage-javascript.html)
A Basic example showing the JavaScript usage.

### [jQuery Usage](examples/usage-jquery.html)
A Basic example showing the jQuery usage.
	 

## License
This software is property of **addCMS**.

This software is distributed **AS-IS** with **no** warranties/guarantees either expressed or implied.

This software is Licensed under [Attribution-NonCommercial-ShareAlike 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/us/) (CC BY-NC-SA 3.0 US). 

### Usage
Under this license you are free to:

 - **Use** this content for any purpose unless explicitly restricted in the terms of use below.
 - **Share**, copy and redistribute the material in any medium or format.
 - **Adapt**, remix, transform, and build upon the material.

### Terms
You may use this product as specified above provided you follow these terms.

 - **Attribution**: You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
 - **NonCommercial**: You may not use the material for commercial purposes.
 - **ShareAlike**: If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

### Links
The abbreviated version of this license can be found at [https://creativecommons.org/licenses/by-nc-sa/3.0/us/](https://creativecommons.org/licenses/by-nc-sa/3.0/us/).

The full version of this license can be found at [https://creativecommons.org/licenses/by-nc-sa/3.0/us/legalcode](https://creativecommons.org/licenses/by-nc-sa/3.0/us/legalcode).
