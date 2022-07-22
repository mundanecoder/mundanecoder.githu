var navbar = document.getElementById("navbar")
var menu = document.getElementById("menu")


window.addEventListener("scroll",() => {
// console.log('scrolled');
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const scrolled = window.scrollY;
console.log(scrolled);

if(scrolled === 303){
navbar.classList.add("sticky");
}
else{
    navbar.classList.remove("sticky");
}
});