let audio = document.getElementById("audio");

function playSong() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
