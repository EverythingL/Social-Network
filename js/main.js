const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");


menuBtn.addEventListener("click", function() {
	console.log("Натискання на кнопку");
	menu.classList.toggle("active");
});
