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
};