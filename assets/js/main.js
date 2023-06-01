const contactMe = document.getElementById("contact-me")
const contactBtn = document.getElementById("get-in-touch")
const returnToDefault = document.getElementById("main")
const footerHover = document.getElementById("footer")

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
