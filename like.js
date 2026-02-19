let likes = 0;

function likeSong() {
  likes++;
  document.getElementById("like-count").innerText =
    "Likes: " + likes;
}