const scrollLeftButton = document.querySelector(".scroll-left");
const scrollRightButton = document.querySelector(".scroll-right");
const slider = document.querySelector(".slider");

scrollLeftButton.addEventListener("click", () => {
    slider.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener("click", () => {
    slider.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});


const form = document.querySelector('.registor-right');

form.addEventListener('click', (e) => {
    e.preventDefault;

    const name = document.querySelector('#name').value;
    localStorage.setItem('name', name) 

    const phone = document.querySelector('#phone').value;
    localStorage.setItem('phone', phone) 
    
    const mail = document.querySelector('#mail').value;
    localStorage.setItem('mail', mail) 
    
})