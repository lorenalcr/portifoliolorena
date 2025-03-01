document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    
    function checkFadeIn() {
        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn(); // Para verificar os elementos já visíveis ao carregar
});
