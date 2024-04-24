let menuIcon = document.querySelector(".menu-icon");
let navbar =document.querySelector('.navbar');

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav ul li a');

function myFunction() {
    document.getElementById("myForm").action = "/action_page.php";
    document.getElementById("demo").innerHTML = "/action_page.php";
  }

window.onscroll =() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav ul li a[href*='+ id +']').classList.add(active)
        })
       
    } 
    
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

