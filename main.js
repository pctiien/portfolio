navBarItems = document.querySelectorAll(".nav-link")
navBarItems.forEach(item=>{
    item.addEventListener("click",(e)=>{
        navBarItems.forEach(element => {
            element.classList.remove("nav-item-checked")
        });
        e.currentTarget.classList.add("nav-item-checked");
    })
})