const loadingText=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');

//increase and dec opacity percentage
var load = 0;
var int=setInterval(blurring,30)
function blurring(){
    load++;
    console.log(load);
    if(load > 99){
        clearInterval(int);
    }

    loadingText.innerHTML= `${load}%`;
    loadingText.style.opacity=scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}

    const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
