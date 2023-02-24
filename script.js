// toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar_main');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scrolll section link
let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset +height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

            // sticky navbar
            let header = document.querySelector('header1');
            header.classList.toggle('sticky',window.scrollY > 100);

            // remove toggle icon
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
};

// scrool reveal
ScrollReveal({
     reset: true,
     distance : '80px',
     durattion:2000,
     delay:200 
    });
ScrollReveal().reveal('.home_content, .head1', { origin : 'top' });
// ScrollReveal().reveal('.h_img,.ser_container,.portfolio_box .contact form', { origin : 'bottom' });


// typing js on multiple text class

const typed = new Typed('.multiple-text', {
strings: ['Frontend Developer','Mern stack Developer ','Java Developer '],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});