const top_bar = document.getElementById('top-header');
const yPosFixed = 200;

//*Code to show and hide fixed menu
window.addEventListener('scroll', showMenu);
function showMenu(){

    if (window.scrollY >= yPosFixed && !top_bar.classList.contains('fixed')){
        top_bar.style.transition = 'none';
        top_bar.classList.add('hide');
        top_bar.classList.add('fixed');
        setTimeout(() => {
            
            top_bar.classList.remove('hide');
            top_bar.style.transition = 'all 0.3s ease';
        top_bar.classList.add('show');
        }, 100);

    } else if (window.scrollY < yPosFixed  && top_bar.classList.contains('fixed')){
        top_bar.style.transition = 'all 0.3s ease';
        top_bar.classList.remove('show');
        top_bar.classList.add('hide');

        setTimeout(() => {
            top_bar.style.transition = 'none';
            top_bar.classList.remove('hide');
            top_bar.classList.remove('fixed');

        }, 350);
        
        
    }
}