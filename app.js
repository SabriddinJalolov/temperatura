let siteFormEl=document.querySelectorAll('.site_form')
let siteImputEl=document.querySelector('.site_imput')
let curreccyResultEl=document.querySelectorAll('.currency-result')
let cartWrapperEl=document.querySelectorAll('.cart_wrapper')

const piyoda=3.6;
const Velosiped = 20.1;
const Mashina = 70;
const Samolyot = 800;


siteFormEl.addEventListener("submit", function(evt){
    evt.preventDefault();



    if(cartWrapperEl.value=="piyoda"){
        curreccyResultEl.textContent=":" +(siteImputEl.value / piyoda)+" km";

    }


});
