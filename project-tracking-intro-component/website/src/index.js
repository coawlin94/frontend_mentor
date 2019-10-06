import './scss/style.scss';

var menu = document.querySelector(".menu-toggle");
var menuItems = menu.children;
var nav = document.querySelector(".nav");

menu.addEventListener("click",function(){
    
    for(let acitvated=0; acitvated<menuItems.length; acitvated++)
    {
        if(menuItems[acitvated].classList.contains("forward"))
        {
            menuItems[acitvated].classList.remove("forward");
            menuItems[acitvated].classList.add("reverse");
        }
        else if(menuItems[acitvated].classList.contains("reverse"))
        {
            menuItems[acitvated].classList.remove("reverse");
            menuItems[acitvated].classList.add("forward");
        }
    }

    nav.classList.toggle("active");
    console.log(nav.classList);
})