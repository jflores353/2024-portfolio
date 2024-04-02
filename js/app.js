const mobileNav = document.getElementById("mobile-nav");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
	mobileNav.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
	mobileNav.style.display = "none";
});
