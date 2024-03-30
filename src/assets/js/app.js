let menu_open = document.getElementById("menu_open");
let menu_close = document.getElementById("menu_close")
let menu_close_icon = document.getElementById("menu_close_icon")

menu_open.addEventListener("click", () => {
    menu_close.classList.remove("hidden");
    menu_open.classList.add("hidden");
})
menu_close_icon.addEventListener("click", () => {
    menu_close.classList.add("hidden");
    menu_open.classList.remove("hidden");
})

