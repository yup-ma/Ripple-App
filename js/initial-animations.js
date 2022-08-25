

document.addEventListener("scroll", function() {
    showElements();
    showFooter();

});

window.addEventListener('load', function(){
    showElements();
    showFooter();
})

function showElements(){
    const animatedElements = document.getElementsByClassName("init-anim");
    animateElements(animatedElements, 'show');
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
