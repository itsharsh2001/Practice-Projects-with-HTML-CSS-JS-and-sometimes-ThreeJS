//Select element function

const selectElement = function (element) {   //Here we make a function selectElement such 
    return document.querySelector(element);  //that whatever class,element or id we pass in 
}                                            //as argument will be returned to us by function               


let menuToggler = selectElement('.menu-toggle');//Using selectElement function to return some 
let body = selectElement('body');               //elements using there id, html element name    
                                                //etc. and storing them them in variables   

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');             //on click it would apply open class to body
});                                            //if not previously there or remove it if
                                               //it was previously there. 
                                               
//Scroll Reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,   //time in milliseconds
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom',{
    origin: 'bottem',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
                                               
            