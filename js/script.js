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
        allLinks.forEach((j)=>{
            j.classList.remove("active");
        })
        e.classList.add("active");

        aside.classList.remove('open');
        navTogglerBtn.classList.remove('open');
    })
 })