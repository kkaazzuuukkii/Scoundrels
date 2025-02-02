document.addEventListener("DOMContentLoaded", function () {
    function addImageIfScreenIs360() {
        console.log("Функція викликана. Поточна ширина:", window.innerWidth);

        const targetDiv = document.querySelector(".options");
        console.log("Знайдено .options:", targetDiv);

        if (!targetDiv) {
            console.warn("Елемент .options не знайдено!");
            return;
        }

        if (window.innerWidth <= 360) {
            if (!targetDiv.querySelector(".dynamic-img")) {
                const img = document.createElement("img");
                img.src = "./images/pinpng.com-hamburger-menu-icon-png-1639439.png"; 
                img.classList.add("dynamic-img"); 
                targetDiv.appendChild(img);
                console.log("Зображення додано!");
            }
        } else {
            const existingImg = targetDiv.querySelector(".dynamic-img");
            if (existingImg) {
                existingImg.remove();
                console.log("Зображення видалено!");
            }
        }
    }

    addImageIfScreenIs360();
    window.addEventListener("resize", addImageIfScreenIs360);
});
