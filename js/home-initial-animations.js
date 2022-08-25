
showElements();
showFooter();
document.addEventListener("scroll", function() {
    showElements();
    showFooter();
    setParallax();
});

function showElements(){
    const animatedElements = document.getElementsByClassName("init-anim");
    const animatedBubbles = document.getElementsByClassName("init-anim-bubble");
    

    animateElements(animatedElements, 'show');
    animateElements(animatedBubbles, 'show');

}

function showFooter(){
    const windowOffsetTop = window.innerHeight + window.scrollY;
    const footer = document.querySelector(".footer-anim");
    const footerOffsetTop = footer.offsetTop;

    if (windowOffsetTop >= footerOffsetTop) {
        addClass(footer, 'show');
    }

}

function animateElements(elements, className){

    Array.prototype.forEach.call(elements, (animatedElement) => {
        const animatedBoxOffsetTop = animatedElement.getBoundingClientRect().top;

        if ((window.innerHeight/6)*5 >= animatedBoxOffsetTop) {
            
            addClass(animatedElement, className);
        }
    });
}

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}

//========================================================================================
/*                                                                                      *
 *                                       PARALLAX                                       *
 *                                                                                      */
//========================================================================================


function setParallax(){
    var scroll_limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
    let scroll =  window.scrollY;
    if (scroll > 0 && scroll < scroll_limit) {

        const parallax_elements = document.getElementsByClassName('parallax');
        const mobile = document.getElementById('mobile-mockup');
        for (let i = 0; i < parallax_elements.length; i++) {

            parallax(parallax_elements[i], scroll, 0.04, 0);
            
        }
        parallax(mobile, scroll, 0, -0.08);

    }
}

function parallax(el, scroll, speedX, speedY){


        el.style.transform = `translateX(${ scroll * speedX}px) translateY(${ scroll * speedY}px)`;
   
}
    

