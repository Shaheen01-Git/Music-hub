function addComment() {
  let input = document.getElementById("comment-input");
  let comment = input.value;

  if (comment === "") return;

  let li = document.createElement("li");
  li.innerText = comment;

  document.getElementById("comments").appendChild(li);
  input.value = "";
}