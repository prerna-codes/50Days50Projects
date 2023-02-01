const button=document.querySelector('.button');
const input=document.querySelector('.input');
const search=document.querySelector('.search');
button.addEventListener('click',()=>{
    search.classList.toggle('active'); //click on search button or toggle 
    input.focus();

})