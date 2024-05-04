let menuIcon = document.getElementById("menu-icon");
let profileMenu = document.getElementById("profile-menu");

menuIcon.addEventListener("click", function(){
    profileMenu.classList.toggle("display-menu");
});