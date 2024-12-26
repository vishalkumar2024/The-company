
const wrapper = document.querySelector('.wrapper'); 
const regesterLink = document.querySelector('.regester-link'); 
const loginLink = document.querySelector('.login-link'); 
const btnPopup = document.querySelector('.btnLogin-popup'); 
const iconClose = document.querySelector('.icon-close'); 

regesterLink.addEventListener('click', ()=>{
     wrapper.classList.add('active');  //to add a class active in wrapper.classList

}); 

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');  //to add a class active in wrapper.classList

}); 

btnPopup.addEventListener('click', ()=>{
    console.log("checked")
    wrapper.classList.add('active-popup');  //to add a class active-popup in wrapper.classList

}); 


iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');  //to add a class active in wrapper.classList

}); 
