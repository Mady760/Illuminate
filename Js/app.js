// const studio = document.getElementById('ourStudio');

// studio.addEventListener('click', () => {
//    let offSetScrollY = window.scroll;
//    body.style.transition = `translateY(${offSetScrollY})`
// })


// const btn = document.querySelector('#scrollBtn');

// btn.addEventListener('click', () =>{
// })

// window.addEventListener('scroll' , () => {
//     console.log(window.scrollY)
// })

// function ScrollUp(){
//     window.scrollTo(0,0)
// }

const navLinks = document.querySelector('.nav-links');
// const tLogo = document.querySelector('#tLogo');
const tLogo = document.getElementById('tLogo');

tLogo.addEventListener('click', () =>{
    // navLinks.style.transform = 'translateY(0%)'
    navLinks.classList.toggle("navbarT")
    console.log('Done')
})