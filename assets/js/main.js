const contactMe = document.getElementById("contact-me")
const contactBtn = document.getElementById("get-in-touch")
const returnToDefault = document.getElementById("main")
const footerHover = document.getElementById("footer")
const navbar = document.getElementById("nav-btn")
const navMenu = document.getElementById("nav-menu")
const menuTags = document.querySelectorAll("#menu")

contactBtn.addEventListener("click", function(){
    contactMe.classList.remove("contact-me")
    contactMe.classList.add("contact-me-click")
    contactBtn.style.display = "none"
})

returnToDefault.addEventListener("click", function(){
    contactMe.classList.remove("contact-me-click")
    contactMe.classList.add("contact-me")
    contactBtn.style.display = "block"
})

footerHover.addEventListener("mouseover", function(){
    contactMe.classList.remove("contact-me")
    contactMe.classList.add("contact-me-click")
    contactBtn.style.display = "none"
})

returnToDefault.addEventListener("mouseover", function(){
    contactMe.classList.remove("contact-me-click")
    contactMe.classList.add("contact-me")
    contactBtn.style.display = "block"
})


let num = 0
navbar.addEventListener("click", function(){
    if(num == 0){
        navMenu.classList.remove("unvisible")
        navMenu.classList.add("visible")
        num++
    } else {
        navMenu.classList.remove("visible")
        navMenu.classList.add("unvisible")
        num--
    }
})

menuTags.forEach((tag) => {
    tag.addEventListener("click", () => {
        navMenu.classList.remove("visible")
        navMenu.classList.add("unvisible")
        num--
    })
})