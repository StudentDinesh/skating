window.addEventListener('scroll',()=>{
    const navbar = document.getElementById('navbarsExample04');
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});