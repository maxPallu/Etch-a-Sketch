let num = 16;

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    num = prompt("TEST");
});

if(num === 0) {
    num = 256;
} else {
    for(let i = 0; i < num * num; i++) {
        const container = document.querySelector(".container");
        const div = document.createElement("div");
        div.classList.add("divSquare");

        container.appendChild(div);
    }
}
