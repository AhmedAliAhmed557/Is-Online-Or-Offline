let title = document.querySelector("h2")
let ul = document.querySelector("ul")
let reload = document.querySelector("button")



window.onload = function() {
    if (window.navigator.online) {
        console.log("online")
        online()
    } else {
        console.log("offline")
        offline()
    }
}
window.addEventListener("online", () => {
    online()
})
window.addEventListener("offline", () => {
    offline()
})

function online() {
    title.innerHTML = "Online Now";
    title.style.color = "#060"
    ul.classList.add("hide")
    reload.classList.add("hide")
}
function offline() {
    title.innerHTML = "Offline Now";
    title.style.color = "gray";
    ul.classList.remove("hide")
    reload.classList.remove("hide")
}

reload.addEventListener("click",()=> {
    window.location.reload()
})