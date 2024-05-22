const navBarItems = document.querySelectorAll(".nav-link")
navBarItems.forEach(item=>{
    item.addEventListener("click",(e)=>{
        navBarItems.forEach(element => {
            element.classList.remove("nav-item-checked")
        });
        e.currentTarget.classList.add("nav-item-checked");
    })
})

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
    let current = ''
    sections.forEach(section=>{
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        
        if(window.scrollY>= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })
    navBarItems.forEach(item => {
        item.classList.remove('nav-item-checked');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('nav-item-checked');
        }
    });
})