document.getElementById("search").addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  let title = document.getElementById("song-title");

  if (title.innerText.toLowerCase().includes(value)) {
    title.style.display = "block";
  } else {
    title.style.display = "none";
  }
});