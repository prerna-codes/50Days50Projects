const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {          //click button
        stopPlaying();
        document.getElementById(sound).play();    //play button
    })

    document.getElementById('buttons').append(btn); //buttons are created 

})

function stopPlaying() {      // stop playing music
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
}
