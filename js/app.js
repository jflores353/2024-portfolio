const mobileNav = document.getElementById("mobile-nav");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const closeMenu = document.querySelectorAll(".close-menu");

menuBtn.addEventListener("click", () => {
	mobileNav.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
	mobileNav.style.display = "none";
});

closeMenu.forEach((item) => {
	item.addEventListener("click", () => {
		mobileNav.style.display = "none";
	});
});

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-75px";
	}
}
