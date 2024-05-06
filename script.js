let frames = document.getElementsByClassName("t");
let currentframe = 0;
function FramesChanger() {
    frames[currentframe].style.display = "none";
    currentframe = (currentframe + 1) % frames.length;
    frames[currentframe].style.display = "block";
}
setInterval(FramesChanger)
