/******************************** Toggle icons navbar *********************************************** */
 
let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('navbar');

menuIcon.onclick= ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
/*********************Scroll section  active link**************************** */


let sections= document.querySelectorAll('section');
let navLink=document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offest= sec.offestTop - 150;
        let height=sec.offestHeight;
        let id =sec.getAttribute('id');

        if(top >=offest && top<offest+height){
            navLink.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href'= +id +']'.classList.add('active'));
            });
        };

    });


   /*********************Skily navbar**************************** */
   let header=document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY>100);
   /*********************Remove toggle icon and navbar**************************** */
   menuIcon.classList.remove('fa-xmark');
   navbar.classList.remove('active');

};
 /*********************Remove toggle icon and navbar**************************** */
 ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
 });

 ScrollReveal().reveal('.home-content,heading',{origin:'top'});
 ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
 ScrollReveal().reveal('.home-content,h1,.about-img',{origin:'left'});
 ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

 /*********************typed js**************************** */
 const typed=new Typed('.multiple-text',{
    strings:['Frontend Devloper','Web Designer','Freelacer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
 });
