
let playingAnimation = false;
const time_to_play_again = 10000; //*In ms

let el = [
    document.getElementById('cover-profile'), 
    document.getElementById('screen-2'), 
    document.getElementById('wave-click'),
    document.getElementById('circle-anim'),
    document.getElementById('screen-3'),
    document.getElementById('keyboard')
];

let times = [ 300, 1000, 500, 500, 500, 500, 500, 500];
window.addEventListener('scroll', function(){

    if(!playingAnimation){
        playAnimation();
    }

})


function playAnimation(){
    
    playingAnimation = true;
    playAnimation1();

    setTimeout(playAnimation2, 300)
    setTimeout(playAnimation3, 2000)
    setTimeout(playAnimation4, 2300)
    setTimeout(playAnimation5, 2800)
    setTimeout(playAnimation6, 3800)
    setTimeout(playAnimation7, 5000)
  
}

function playAnimation1(){
    el[0].classList.add('play');
}

function playAnimation2(){
    el[1].classList.add('play');
}

function playAnimation3(){
    
    el[2].classList.add('play');
}

function playAnimation4(){
    
    el[3].classList.add('play');
}

function playAnimation5(){
    
    el[4].classList.add('play');
}
function playAnimation6(){
    
    el[5].classList.add('play');

}
function playAnimation7(){
    removeAnimations();
    el[4].classList.add('play2');

    setTimeout(function(){
        el[5].classList.remove('play');
        el[4].classList.remove('play2');
        playAnimation();
    }, time_to_play_again)
}
function removeAnimations(){
    el[0].classList.remove('play');
    el[1].classList.remove('play');
    el[2].classList.remove('play');
    el[3].classList.remove('play');
    el[4].classList.remove('play');
    
}