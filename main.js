document.addEventListener("DOMContentLoaded", function () {
    function addImageIfScreenIs360() {
        console.log("Функція викликана. Поточна ширина:", window.innerWidth);

        const targetDiv = document.querySelector(".options");

        if (!targetDiv) {
            console.warn("Елемент .options не знайдено!");
            return;
        }

        if (window.innerWidth <= 600) {
            if (!targetDiv.querySelector(".dynamic-img")) {
                const img = document.createElement("img");
                img.src = "./images/pinpng.com-hamburger-menu-icon-png-1639439.png"; 
                img.classList.add("dynamic-img"); 
                img.addEventListener("click", toggleMenu); // Додаємо обробник кліку
                targetDiv.appendChild(img);
            }
        } else {
            const existingImg = targetDiv.querySelector(".dynamic-img");
            if (existingImg) {
                existingImg.remove();
            }
        }
    }

    function toggleMenu() {
        const navBar = document.querySelector(".nav-bar"); // Вибираємо навбар
        if (navBar) {
            navBar.classList.toggle("nav-open"); // Додаємо/видаляємо клас .nav-open
        }
    }

    addImageIfScreenIs360();
    window.addEventListener("resize", addImageIfScreenIs360);
});
