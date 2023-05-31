const contactMe = document.getElementById("contact-me")
const contactBtn = document.getElementById("get-in-touch")
const returnToDefault = document.getElementById("main")

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