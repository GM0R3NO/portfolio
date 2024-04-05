const sol = document.querySelector('.sol')


document.querySelector('label').addEventListener("click", () => {
    document.body.classList.toggle("dark")
    if(document.body.classList == "dark"){
    sol.setAttribute('src', './img/lua.png')
    }else{
        sol.setAttribute('src', './img/sol.png')
    }
})