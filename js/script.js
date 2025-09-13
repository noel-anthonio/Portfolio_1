// document.getElementById('contact-form').addEventListener('submit',function(e){
//     e.preventDefault();
//     alert("Message envoyé !");
// });

console.log("script js chargé")
document.addEventListener("DOMContentLoaded", function(){
    // toggle du menumobile
    const toggleBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    toggleBtn.addEventListener("click", () =>{
        nav.classList.toggle("open");
    });


    //gestion de la soumission du formulaire
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message envoyé !");
        form.reset();
    });


    // link active on click

    // const navLinks = document.querySelectorAll(".nav ul li a");
    // navLinks.forEach(link => {
    //     link.addEventListener("click", e => {
    //         //retirer active de tous
    //         navLinks.forEach(l => 
    //             l.classList.remove("active"));

    //         //ajouter a celui cliquer
    //         e.currentTarget.classList.add("active");
    //     });
    // });

    //optionnal : update active link on scroll
    // const sections  = document.querySelectorAll("section[id]");
    // if ("IntersectionObserver" in window) {
    //     const observer = new  IntersectionObserver((entries)=> {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 const id = entry.target.getAttribute("id");
    //                 const activeLink = document.querySelector('.nav ul li a[href="#${id}"]');
    //                 if (activeLink) {
    //                     navLinks.forEach( l => l.classList.remove("active"));
    //                 activeLink.classList.add("active");
    //                 }
    //             }

    //         });
    //     }, {
    //         root: null,
    //         rootMargin: "-30% 0px -70px 0px",
    //         threshold: 0.1
    //     });
    //         sections.forEach(sec => observer.observe(sec));
    // }
    





});