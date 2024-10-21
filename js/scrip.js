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
