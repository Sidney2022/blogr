const btnProduct = document.querySelector('.product')
const btnCompany = document.querySelector('.company')
const btnContact = document.querySelector('.contact')
const btnActive1 = document.querySelector('.active-arr1')
const btnDef1 = document.querySelector('.def-arr1')
const btnActive2 = document.querySelector('.active-arr2')
const btnDef2 = document.querySelector('.def-arr2')
const btnActive3 = document.querySelector('.active-arr3')
const btnDef3 = document.querySelector('.def-arr3')
const product_card = document.querySelector('.products-card')
const company_card = document.querySelector('.company-card')
const connect_card = document.querySelector('.connect-card')
const mobile_navbar = document.querySelector('nav')

const menuBtn = document.querySelector('.mobile-menu')

// if ($(window).width() < 960) {
//     alert('Less than 960');
//  }
//  else {
//     alert('More than 960');
//  }


 //function for screen resize
 function screen_resize() {
    var h = parseInt(window.innerHeight);
    var w = parseInt(window.innerWidth);

    if(w <= 500) {
        //max-width 500px
        // actions here...
        red();
    } else if(w > 500 && w <=850) {
        //max-width 850px
        // actions here...
        orange();
    } else {
        // 850px and beyond
        // actions here...
        green();
    }

}

btnProduct.addEventListener('click', () => {
    btnActive1.classList.toggle('active')
    btnDef1.classList.toggle('active')
    product_card.classList.toggle('active')
    btnProduct.classList.toggle('active')
})

btnCompany.addEventListener('click', () => {
    btnActive2.classList.toggle('active')
    btnDef2.classList.toggle('active')
    company_card.classList.toggle('active')
    btnCompany.classList.toggle('active')
})

btnContact.addEventListener('click', () => {
    btnActive3.classList.toggle('active')
    btnDef3.classList.toggle('active')
    connect_card.classList.toggle('active')
    btnContact.classList.toggle('active')
})


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    mobile_navbar.classList.toggle('active')
})