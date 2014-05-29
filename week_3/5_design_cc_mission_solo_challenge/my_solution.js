// This is a solo challenge
//-----------------------------------------------------------------------------------------

// Your mission description:

// Mission: Pilot the UFO to reach Earth and humanity!

// You are an Alien, trying to pilot an UFO super-mother-ship to destroy Earth!

// - The UFO is located at top-left corner of the space map.
// - The Earth is located at the bottom right corner of the space map.
// - The green tile on the Map is BlackHole, avoid them at all cost!!
// - Pilot the UFO to safly reach Earth without being sucked in the infinite unknown matter of BlackHole!
// - Use moveUp(); moveDown(); moveLeft(); moveRight; to control your ship! 

//-----------------------------------------------------------------------------------------

// Pseudocode
// html make canvas

// javascript begin

// creat canvas object

// create UFO image object
// draw the UFO object in canvas

// create Earth image object
// draw the Earth object in canvas

// set font and style for canvas

// set coordinats for BlackHole blocks
// set color for BlackHole blocks

// set initial x cordinate for UFO
// set x movement distance
// set inital y cordinate for UFO
// set y movement distance

// assign loss message for crashing

// set function for moving right
//   x += movement disstance
//   draw image at new coordinate
//     if x less than 50 or bigger than 850, or if y less than 0 or bigger than 650
//     alert loss message
// log current position

// set function for moving left
//   x -= movement disstance
//   draw image at new coordinate
//     if x less than 50 or bigger than 850, or if y less than 0 or bigger than 650
//     alert loss message
// log current position

// set function for moving up
//   y -= movement disstance
//   draw image at new coordinate
//     if x less than 50 or bigger than 850, or if y less than 0 or bigger than 650
//     alert loss message
// log current position

// set function for moving down
//   y += movement disstance
//   draw image at new coordinate
//     if x less than 50 or bigger than 850, or if y less than 0 or bigger than 650
//     alert loss message
// log current position

// script end 

//-----------------------------------------------------------------------------------------

// Initial code

// <canvas id="ctx" width="900" height="700" style="border:5px solid #000000;"></canvas>

// <script>

// var ctx = document.getElementById("ctx").getContext("2d");
// // var imageObj = document.getElementById("ufo");
// var ufo = new Image();
// ufo.src = "images/ufo.jpg"

// ufo.onload = function () {
//     ctx.drawImage(ufo, 50, 50);
// };

// var earth = new Image();
// earth.src = "images/earth_crop.png"

// earth.onload = function () {
//     ctx.drawImage(earth, 700, 600);
// };

// ctx.font = "30px Arial";
// ctx.globalAlpha = 0.9;

// ctx.fillStyle = "blue";
// ctx.fillRect(50, 150, 50, 500);
// ctx.fillRect(50, 150, 500, 50);
// ctx.fillRect(700, 150, 50, 300);
// ctx.fillRect(300, 400, 400, 50);
// ctx.fillRect(300, 450, 50, 100);
// // ctx.clearRect(75,75,100,100);


// var x = 50;
// var spdX = 100;
// var y = 50
// var spdY = 80;

// var lossMessage = "You crashed in a wall and DIED!"

// // ctx.fillText("P", x, y);

// function moveRight() {
// 	x += spdX;
//     // y += spdY;
//     ctx.drawImage(ufo, x, y);
//     if ( (x < 50 || x > 850) || (y < 0 || y > 650) ) {
//     	alert(lossMessage);
//     }
//     console.log ("position x:" + x + " position y:" + y);
// }
// function moveLeft() {
// 	x -= spdX;
//     // y += spdY;
//     ctx.drawImage(ufo, x, y);
//     if ( (x < 50 || x > 850) || (y < 0 || y > 650) ) {
//     	alert(lossMessage);
//     }
//     console.log("position x:" + x + " position y:" + y);
// }
// function moveUp() {
// 	// x -= spdX;
//     y -= spdY;
//     ctx.drawImage(ufo, x, y);
//     if ( (x < 50 || x > 850) || (y < 0 || y > 650) ) {
//     	alert(lossMessage);
//     }
//     console.log("position x:" + x + " position y:" + y);
// }
// function moveDown() {
// 	// x -= spdX;
//     y += spdY;
//     ctx.drawImage(ufo, x, y);
//     if ( (x < 50 || x > 850) || (y < 0 || y > 650) ) {
//     	alert(lossMessage);
//     }
//     console.log("position x:" + x + " position y:" + y);
// }


// setInterval(update, 500);

// </script>

//-----------------------------------------------------------------------------------------


// Refactored Code


<canvas id="ctx" width="900" height="700" style="border:5px solid #000000;"></canvas>

<script>

var ctx = document.getElementById("ctx").getContext("2d");
// var imageObj = document.getElementById("ufo");
var ufo = new Image();
ufo.src = "images/ufo.jpg"

ufo.onload = function () {
    ctx.drawImage(ufo, 50, 50);
};

var earth = new Image();
earth.src = "images/earth_crop.png"

earth.onload = function () {
    ctx.drawImage(earth, 700, 600);
};

ctx.font = "30px Arial";
ctx.globalAlpha = 0.9;

ctx.fillStyle = "blue";
ctx.fillRect(50, 150, 50, 500);
ctx.fillRect(50, 150, 500, 50);
ctx.fillRect(700, 150, 50, 300);
ctx.fillRect(300, 400, 400, 50);
ctx.fillRect(300, 450, 50, 100);
// ctx.clearRect(75,75,100,100);


var x = 50;
var spdX = 100;
var y = 50
var spdY = 80;

var lossMessage = "You crashed in a wall and DIED!"

// ctx.fillText("P", x, y);

function moveRight() {
	x += spdX;
    // y += spdY;
    ctx.drawImage(ufo, x, y);
    if ( (x < 50 || x > 850) || (y < 0 || y > 650) ) {
    	alert(lossMessage);
    }
    console.log ("position x:" + x + " position y:" + y);
}
function moveLeft() {
	x -= spdX;
    // y += spdY;
    ctx.drawImage(ufo, x, y);
    if ( (x < 50 || x > 850) || (y < 0 || y > 650) ) {
    	alert(lossMessage);
    }
    console.log("position x:" + x + " position y:" + y);
}
function moveUp() {
	// x -= spdX;
    y -= spdY;
    ctx.drawImage(ufo, x, y);
    if ( (x < 50 || x > 850) || (y < 0 || y > 650) ) {
    	alert(lossMessage);
    }
    console.log("position x:" + x + " position y:" + y);
}
function moveDown() {
	// x -= spdX;
    y += spdY;
    ctx.drawImage(ufo, x, y);
    if ( (x < 50 || x > 850) || (y < 0 || y > 650) ) {
    	alert(lossMessage);
    }
    console.log("position x:" + x + " position y:" + y);
}

// setInterval(update, 500);
</script>

//-----------------------------------------------------------------------------------------


// Reflection

// In the beginning I really panicked. Because the challenge asked me to design a level such as the ones in codeCombat, however
// I had zero experience with game design and javascript. I spent a few hours scratching my head, thinking about how to come
// up with a game plan that allow me to design and test my code. I know that in order to really test it, I first have to figure 
// out how to incorporate javascript into html code, that's how I can use chrome dev tool to test my game. So I found a video
// tutorial on youtube, taught me how to make canvas on html and manipulae javascript code within the canvas. Finally after 
// end-less research I was able to put together the code for a simple browser game that has a UFO flying around to land on earth.
// This process of starting from knowing nothing to accomplishing a complete game is very rewarding. I am confident with all the 
// learning competencies now. I enjoyed the part where I can see my own work working in the browser!! I found the part where I have 
// to figure out different coordinates to place my object very tedious and time consuming. Overall this is greate experience!!
// 
// 