
const burger = document.getElementById('burger-icon');

burger.addEventListener('click', function(){
    console.log("click")
    const menu_mobile = document.getElementById('mobile-menu');
    const burger_lines = document.getElementsByClassName('burger-line');
    menu_mobile.classList.toggle('show');
    for (let i = 0; i < burger_lines.length; i++) {
        burger_lines[i].classList.toggle('cross');
        
    }
    top_bar.classList.toggle('mobile-fixed');
})
