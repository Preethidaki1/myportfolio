/*menu*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
/*scroll*/
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
window.onscroll = () => {
  navbar.classList.remove('active');
};
// Dark Mode / light mode
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
  if(darkModeIcon.classList.toggle('bx-sun')){
    darkModeIcon.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else 
  {
     darkModeIcon.classList.replace("bx-sun", "bx-moon");
     document.body.classList.remove("active");
  }
};                            
 
  