
const mobileNav = document.querySelector('.mobile-navigation');

document.querySelector(".mobile-navigation i").addEventListener("click", () => {
    console.log("clicked");
    mobileNav.classList.contains("show") ? mobileNav.classList.remove("show") : mobileNav.classList.add("show")
    console.log(mobileNav); 
});



Scrollreaveal().reveal('.sofa-row')