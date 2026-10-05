let count = 0;

const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateCounter() {
    counter.textContent = count;

    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);

updateCounter();
