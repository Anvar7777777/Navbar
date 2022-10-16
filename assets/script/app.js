const page1El = document.querySelector("#page1");
const page2El = document.querySelector("#page2");
const page3El = document.querySelector("#page3");
const page4El = document.querySelector("#page4");
const information = document.querySelector("#information-part")

page1El.addEventListener("click", () => {
    page1El.classList.toggle("click-shadow");
    page2El.classList.remove("click-shadow");
    page3El.classList.remove("click-shadow");
    page4El.classList.remove("click-shadow");
    information.classList.toggle("info-color1");
})
page2El.addEventListener("click", () => {
    page2El.classList.toggle("click-shadow");
    page1El.classList.remove("click-shadow");
    page3El.classList.remove("click-shadow");
    page4El.classList.remove("click-shadow");
    information.classList.toggle("info-color2");
})
page3El.addEventListener("click", () => {
    page3El.classList.toggle("click-shadow");
    page1El.classList.remove("click-shadow");
    page2El.classList.remove("click-shadow");
    page4El.classList.remove("click-shadow");
    information.classList.toggle("info-color3");
})
page4El.addEventListener("click", () => {
    page4El.classList.toggle("click-shadow");
    page1El.classList.remove("click-shadow");
    page2El.classList.remove("click-shadow");
    page3El.classList.remove("click-shadow");
    information.classList.toggle("info-color4");
})