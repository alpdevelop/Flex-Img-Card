const first = document.querySelector(".first.column")
const second = document.querySelector(".second.column")
const third = document.querySelector(".third.column")
const fourth = document.querySelector(".fourth.column")
const fifth = document.querySelector(".fifth.column")

first.addEventListener("click", () => {
    first.classList.toggle("open");
    first.classList.toggle("open-active");
})

second.addEventListener("click", () => {
    second.classList.toggle("open");
    second.classList.toggle("open-active");
})

third.addEventListener("click", () => {
    third.classList.toggle("open");
    third.classList.toggle("open-active");
})

fourth.addEventListener("click", () => {
    fourth.classList.toggle("open");
    fourth.classList.toggle("open-active");
})

fifth.addEventListener("click", () => {
    fifth.classList.toggle("open");
    fifth.classList.toggle("open-active");
})
