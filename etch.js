ROWS = 10;
function fillBox(rows) {
  let box = document.getElementById("sketchBox");
  let width = box.clientWidth;
  console.log(width);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < rows; col++) {
      let sq = document.createElement("div");
      let length = Math.floor(width / rows).toString();
      sq.style.width = length + "px";
      sq.style.height = length + "px";
      sq.className = "square";
      box.appendChild(sq);
    }
  }
}

function clickHandler(event) {
  console.log(event.target.classList);
  if (
    event.target.classList[0] == "square" &&
    event.target.classList.length == 1
  ) {
    event.target.className += " filled";
  }
}

document.addEventListener("click", function(event) {
  clickHandler(event);
});
/*function clickHandler(event){
    //identifies clicked list section
    if (event.target.id.indexOf("arro") != -1||event.target.id.indexOf("head") != -1){
        accordion = document.getElementById("accordion")
        //removes previous dropped down bits and arrow animation
        let expandedText = (accordion.querySelector(".active"));
        if (expandedText != null){
            expandedText.classList.remove("active");*/

function reset() {
  box = document.getElementById("sketchBox");
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  fillBox(ROWS);
}

fillBox(ROWS);
