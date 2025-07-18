const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",()=>{
    //mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
navLinks.forEach(link=>{
    link.addEventListener("click",()=>menuOpenButton.click());
});
//close button
menuCloseButton.addEventListener("click",()=>menuOpenButton.click
());