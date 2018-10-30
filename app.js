const inputs = document.querySelectorAll(".controls input");

const onChange = function () {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(input => {
    input.addEventListener("change", onChange);
    input.addEventListener("mousemove", onChange);
})