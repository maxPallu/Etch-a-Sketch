for(let i = 0; i < 256; i++) {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    div.classList.add("div");
    div.textContent = "TEST";

    container.appendChild(div);
}