const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        links.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 4 + 1.5}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

}


navSlide();