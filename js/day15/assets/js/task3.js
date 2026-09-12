const details = document.getElementById("details");
const btn = document.getElementById("btn");

let isOn = false;

btn.addEventListener("click", () => {

    isOn = !isOn;

    details.classList.toggle("opacity-0");
    details.classList.toggle("max-h-0");

    details.classList.toggle("opacity-100");
    details.classList.toggle("max-h-40");

    btn.textContent = isOn ? "Hide Details" : "Show Details";

});