const song = document.getElementById('song');
const playeBtn = document.querySelector('.player-inner');
const nextBtn = document.querySelector('.play-forward');
const prevBtn = document.querySelector('.play-back');
let isPlaying = true;
let indexSong =0;
playeBtn.addEventListener('click', playPause);
const musics = ['holo.mp3', 'summer.mp3', 'spark.mp3', 'home.mp3'];

nextBtn.addEventListener('click',function() {
    changeSong(1);
})
prevBtn.addEventListener('click',function() {
    changeSong(-1);
})
function changeSong(dir) {
    if(dir === 1) {
        indexSong ++;
        if(indexSong >= musics.length){
            indexSong = 0;
        }
        isPlaying = true;
    }else if (dir === -1) {
        indexSong --;
        if(indexSong < 0){
            indexSong = musics.length - 1;
        }
        isPlaying = true;
    }
    song.setAttribute("src", `./music/${musics[indexSong]}`);
    playPause();
}
function playPause() {
    if (isPlaying) {
        song.play();
        playeBtn.innerHTML = '<ion-icon name="pause"></ion-icon>'
        isPlaying = false;
    } else {
        song.pause();
        playeBtn.innerHTML = '<ion-icon name="play"></ion-icon>'
        isPlaying = true;
    }
}