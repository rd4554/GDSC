// function touchStarted(){
//     getAudioContext().resume();
// }


const promptButton = document.getElementById('aa');

promptButton.addEventListener('click', () => {
    const userInput = prompt('Please enter your name:');
    if (userInput != null) {
        alert(`Hello, ${userInput}!`)   ;
    } else {
        alert('Try again');
    }
});
const promptBtn = document.getElementById('bb');

promptBtn.addEventListener('click', () => {
    const userInput = prompt('favourite artist?');
    if (userInput == "taylor swift") {
        alert(`I love you`);
    } else {
        alert('Login unsuccessful and hence you won\'t get the surprise :(');
    }
});



const button1 = document.getElementById('play-button1');
const audio1 = document.getElementById('audio1');


button1.addEventListener('click', () => {
    const audioContext1 = new AudioContext();
        audio1.play(); 
});
const button2 = document.getElementById('play-button2');
const audio2 = document.getElementById('audio2');


button2.addEventListener('click', () => {
    const audioContext2 = new AudioContext();
    audio2.play(); 
});
const button3 = document.getElementById('play-button3');
const audio3= document.getElementById('audio3');


button3.addEventListener('click', () => {
    const audioContext3 = new AudioContext();
    audio3.play(); 
});
const button4 = document.getElementById('play-button4');
const audio4 = document.getElementById('audio4');


button4.addEventListener('click', () => {
    const audioContext4 = new AudioContext();
    audio4.play(); 
});
const button5 = document.getElementById('play-button5');
const audio5 = document.getElementById('audio5');

button5.addEventListener('click', () => {
    const audioContext5 = new AudioContext();
    audio5.play(); })


const audios = document.querySelectorAll('audio');
const musicImage = document.getElementById('music-image');
let currentlyPlayingAudio = null;

audios.forEach(audio => {
    audio.addEventListener('play', () => {
        audios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0;
            }
        });
        currentlyPlayingAudio = audio;
        musicImage.src = 'pause.svg'; 
    });

    audio.addEventListener('pause', () => {
        if (![...audios].some(audio => !audio.paused)) {
            musicImage.src = 'plays.svg'; 
        }
    });

    audio.addEventListener('ended', () => {
        if (![...audios].some(audio => !audio.paused)) {
            currentlyPlayingAudio = null;
            musicImage.src = 'plays.svg'; 
        }
    });
});

musicImage.addEventListener('click', () => {
    if (currentlyPlayingAudio && currentlyPlayingAudio.paused) {
        currentlyPlayingAudio.play(); 
        musicImage.src = 'pause.jpg'; 
    } else if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause(); 
        musicImage.src = 'play.jpg'; 
    }
});


var video = document.getElementById("myVideo");

 ar btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}