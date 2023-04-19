const Explanation = document.querySelector("#sidebar > p");
const Img = document.querySelector("#sidebar > img:nth-child(1)");

function changeAlt(id) {
    Img.alt = document.getElementById(id).alt;;
  }


document.getElementById("cooking").addEventListener("click", function() {
	Explanation.innerHTML = 'I really enjoy cooking. This is me cooking barbeque.';
    Img.src = document.getElementById("cooking").src;
    changeAlt("cooking");
});

document.getElementById("programming").addEventListener("click", function() {
	Explanation.innerHTML = 'I enjoy coding. My favourite language is C++. My least favorite language is javascript. :(';
    Img.src = document.getElementById("programming").src;
    changeAlt("programming");
});

document.getElementById("soccer").addEventListener("click", function() {
	Explanation.innerHTML = 'I enjoy playing soccer. This is my Rec Sports Soccer Team';
    Img.src = document.getElementById("soccer").src;
    changeAlt("soccer");
});

document.getElementById("minecraft").addEventListener("click", function() {
	Explanation.innerHTML = 'I play a lot of games but my favorite is definitely Minecraft';
    Img.src = document.getElementById("minecraft").src;
    changeAlt("minecraft");
});

document.getElementById("workout").addEventListener("click", function() {
	Explanation.innerHTML = 'I enjoy exercising though I do not have as much time to do it nowadays.';
    Img.src = document.getElementById("workout").src;
    changeAlt("workout");
});

document.getElementById("bucks").addEventListener("click", function() {
	Explanation.innerHTML = 'I watch a lot of Basketball. My favorite team is The Milwaukee Bucks and my favoriye player is Giannis';
    Img.src = document.getElementById("bucks").src;
    changeAlt("bucks");
});

document.getElementById("books").addEventListener("click", function() {
	Explanation.innerHTML = 'I like reading books. My favorite book series is Alex Rider, a series of spy novels written by British author Anthony Horowitz. ';
    Img.src = document.getElementById("books").src;
    changeAlt("books");
});

document.getElementById("anime").addEventListener("click", function() {
	Explanation.innerHTML = 'I enjoy watching anime. My favorite anime series is Naruto Shippuden';
    Img.src = document.getElementById("anime").src;
    changeAlt("anime");
});

document.getElementById("manutd").addEventListener("click", function() {
	Explanation.innerHTML = 'I enjoy watching soccer also. I am a fan of Manchester United';
    Img.src = document.getElementById("manutd").src;
    changeAlt("manutd");
});

//FOCUS
document.getElementById("cooking").addEventListener("focus", function() {
	Explanation.innerHTML = 'I really enjoy cooking. This is me cooking barbeque.';
    Img.src = document.getElementById("cooking").src;
    changeAlt("cooking");
});

document.getElementById("programming").addEventListener("focus", function() {
	Explanation.innerHTML = 'I enjoy coding. My favourite language is C++. My least favorite language is javascript. :(';
    Img.src = document.getElementById("programming").src;
    changeAlt("programming");
});

document.getElementById("soccer").addEventListener("focus", function() {
	Explanation.innerHTML = 'I enjoy playing soccer. This is my Rec Sports Soccer Team';
    Img.src = document.getElementById("soccer").src;
    changeAlt("soccer");
});

document.getElementById("minecraft").addEventListener("focus", function() {
	Explanation.innerHTML = 'I play a lot of games but my favorite is definitely Minecraft';
    Img.src = document.getElementById("minecraft").src;
    changeAlt("minecraft");
});

document.getElementById("workout").addEventListener("focus", function() {
	Explanation.innerHTML = 'I enjoy exercising though I do not have as much time to do it nowadays.';
    Img.src = document.getElementById("workout").src;
    changeAlt("workout");
});

document.getElementById("bucks").addEventListener("focus", function() {
	Explanation.innerHTML = 'I watch a lot of Basketball. My favorite team is The Milwaukee Bucks and my favoriye player is Giannis';
    Img.src = document.getElementById("bucks").src;
    changeAlt("bucks");
});

document.getElementById("books").addEventListener("focus", function() {
	Explanation.innerHTML = 'I like reading books. My favorite book series is Alex Rider, a series of spy novels written by British author Anthony Horowitz. ';
    Img.src = document.getElementById("books").src;
    changeAlt("books");
});

document.getElementById("anime").addEventListener("focus", function() {
	Explanation.innerHTML = 'I enjoy watching anime. My favorite anime series is Naruto Shippuden';
    Img.src = document.getElementById("anime").src;
    changeAlt("anime");
});

document.getElementById("manutd").addEventListener("focus", function() {
	Explanation.innerHTML = 'I enjoy watching soccer also. I am a fan of Manchester United';
    Img.src = document.getElementById("manutd").src;
    changeAlt("manutd");
});