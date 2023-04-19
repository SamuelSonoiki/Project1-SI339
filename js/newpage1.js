const Explanation = document.querySelector("#sidebar > p");
const Img = document.querySelector("#sidebar > img:nth-child(1)");

function changeAlt(id) {
    Img.alt = document.getElementById(id).alt;;
  }

document.getElementById("card1").addEventListener("click", function() {
	Explanation.innerHTML = 'This is how the app looks when being played with 3 players';
    Img.src = document.getElementById("card1").src;
    changeAlt("card1");
});

document.getElementById("card2").addEventListener("click", function() {
	Explanation.innerHTML = 'This is how the app looks when being played with 4 players';
    Img.src = document.getElementById("card2").src;
    changeAlt("card2");
});

document.getElementById("unity").addEventListener("click", function() {
	Explanation.innerHTML = 'This is the Unity game engine. I used this for all of the art and animations.';
    Img.src = document.getElementById("unity").src;
    changeAlt("unity");
});

document.getElementById("cSharp").addEventListener("click", function() {
	Explanation.innerHTML = 'This is the CSharp language. I used this for the logic and behaviour part of the game.';
    Img.src = document.getElementById("cSharp").src;
    changeAlt("cSharp");
});

document.getElementById("app").addEventListener("click", function() {
	Explanation.innerHTML = 'It will be available on the App Store';
    Img.src = document.getElementById("app").src;
    changeAlt("app");
});

document.getElementById("play").addEventListener("click", function() {
	Explanation.innerHTML = 'It will be available on the Play Store';
    Img.src = document.getElementById("play").src;
    changeAlt("play");
});

document.getElementById("SI").addEventListener("click", function() {
	Explanation.innerHTML = 'This is an example of a Sudden Impulse occurence';
    Img.src = document.getElementById("SI").src;
    changeAlt("SI");
});

document.getElementById("SSC").addEventListener("click", function() {
	Explanation.innerHTML = 'This is an example of a Sudden Storm Commencement occurence';
    Img.src = document.getElementById("SSC").src;   
    changeAlt("SSC"); 
});

document.getElementById("python").addEventListener("click", function() {
    Explanation.innerHTML = 'The language I use for this is Python';
    Img.src = document.getElementById("python").src;
    changeAlt("python");
});

document.getElementById("jupyter").addEventListener("click", function() {
    Explanation.innerHTML = 'The IDE I use for this is Jupyter';
    Img.src = document.getElementById("jupyter").src;
    changeAlt("jupyter");
});

//FOCUS
document.getElementById("card1").addEventListener("focus", function() {
	Explanation.innerHTML = 'This is how the app looks when being played with 3 players';
    Img.src = document.getElementById("card1").src;
    changeAlt("card1");
});

document.getElementById("card2").addEventListener("focus", function() {
	Explanation.innerHTML = 'This is how the app looks when being played with 4 players';
    Img.src = document.getElementById("card2").src;
    changeAlt("card2");
});

document.getElementById("unity").addEventListener("focus", function() {
	Explanation.innerHTML = 'This is the Unity game engine. I used this for all of the art and animations.';
    Img.src = document.getElementById("unity").src;
    changeAlt("unity");
});

document.getElementById("cSharp").addEventListener("focus", function() {
	Explanation.innerHTML = 'This is the CSharp language. I used this for the logic and behaviour part of the game.';
    Img.src = document.getElementById("cSharp").src;
    changeAlt("cSharp");
});

document.getElementById("app").addEventListener("focus", function() {
	Explanation.innerHTML = 'It will be available on the App Store';
    Img.src = document.getElementById("app").src;
    changeAlt("app");
});

document.getElementById("play").addEventListener("focus", function() {
	Explanation.innerHTML = 'It will be available on the Play Store';
    Img.src = document.getElementById("play").src;
    changeAlt("play");
});

document.getElementById("SI").addEventListener("focus", function() {
	Explanation.innerHTML = 'This is an example of a Sudden Impulse occurence';
    Img.src = document.getElementById("SI").src;
    changeAlt("SI");
});

document.getElementById("SSC").addEventListener("focus", function() {
	Explanation.innerHTML = 'This is an example of a Sudden Storm Commencement occurence';
    Img.src = document.getElementById("SSC").src;   
    changeAlt("SSC"); 
});

document.getElementById("python").addEventListener("focus", function() {
    Explanation.innerHTML = 'The language I use for this is Python';
    Img.src = document.getElementById("python").src;
    changeAlt("python");
});

document.getElementById("jupyter").addEventListener("focus", function() {
    Explanation.innerHTML = 'The IDE I use for this is Jupyter';
    Img.src = document.getElementById("jupyter").src;
    changeAlt("jupyter");
});



