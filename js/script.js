const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', function(){
    asideSectionTogglerBtn();
}) 
function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
}
 const allLinks = document.querySelectorAll('.links');
 allLinks.forEach(function(e){
    e.addEventListener('click', function(){
        allLinks.forEach((e)=>{
            e.classList.remove("active");
        })
        e.classList.add("active");

        aside.classList.remove('open');
        navTogglerBtn.classList.remove('open');
    })
 })
const sections = document.querySelectorAll('.main-content section');
window.addEventListener('scroll', ()=>{
    sections.forEach((e)=>{
        if(e.getBoundingClientRect().top === 300){
             allLinks.forEach((e)=>{
                e.classList.remove("active");
            })
            e.classList.add("active");
        }
    })
})