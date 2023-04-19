const AboutLink = document.querySelector("#sidebarnav > a:nth-child(1)");
const EdLink = document.querySelector("#sidebarnav  > a:nth-child(2)");
const ContactLink = document.querySelector("#sidebarnav  > a:nth-child(3)");
const Img = document.querySelector("#sidebar > img:nth-child(1)");


AboutLink.addEventListener("click", function() {
	Img.src = './images/Home/MyPic1.jpeg';
	Img.alt = "Picture of Samuel";
});

EdLink.addEventListener("click", function() {
	Img.src = './images/Home/website.png';
	Img.alt = "Website Icon";
});

ContactLink.addEventListener("click", function() {
	Img.src = './images/Home/contact_icon.png';
	Img.alt = "Contact Icon";
});
