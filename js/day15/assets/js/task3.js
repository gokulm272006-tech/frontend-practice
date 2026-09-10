const details = document.getElementById("details");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    details.classList.toggle("opacity-0");
    details.classList.toggle("max-h-0");

    details.classList.toggle("opacity-100");
    details.classList.toggle("max-h-40");

    if (details.classList.contains("opacity-100")) {
        btn.textContent = "Hide Details";
    } else {
        btn.textContent = "Show Details";
    }

});