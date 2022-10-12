let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".circle");

let activeCircle = 1;
let totalCircles = circles.length;

next.addEventListener("click", () => {
    activeCircle++;
    if(activeCircle > totalCircles) {
        activeCircle = totalCircles;
    }
    updateProgress();
})

prev.addEventListener("click", () => {
    activeCircle--;
    if(activeCircle < 1) {
        activeCircle = 1;
    }
    updateProgress();
})

function updateProgress() {
    let percent = ((activeCircle-1) / (totalCircles-1)) * 100;
    progress.style.width = percent + "%";
    circles.forEach((circle, idx) => {
        if(idx < activeCircle) {
            circle.classList.add("active");
        }
        else {
            circle.classList.remove("active");
        }
    })
    if(activeCircle == totalCircles) {
        next.disabled = true;
    }
    else if(activeCircle == 1) {
        prev.disabled = true;
    }
    else {
        next.disabled = false;
        prev.disabled = false;
    }
}