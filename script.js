document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const writeButtons = document.querySelectorAll(".writeBTN");
    const closeButton = document.querySelector(".close-btn");
    const sendButton = document.getElementById("sendBTN");
    const textarea = modal.querySelector("textarea");

    // Відкрити модальне вікно
    writeButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
            sendButton.disabled = true; // Деактивуємо кнопку при відкритті
        });
    });

    // Закрити модальне вікно
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрити модальне вікно при кліку поза ним
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Активувати кнопку, якщо є текст
    textarea.addEventListener("input", () => {
        sendButton.disabled = textarea.value.trim() === ""; // Активуємо кнопку, якщо є текст
    });

    // Закрити модальне вікно та очистити текст при натисканні "Відправити"
    sendButton.addEventListener("click", () => {
        modal.style.display = "none"; // Закриває модальне вікно
        textarea.value = ""; // Очищає текстове поле
        sendButton.disabled = true; // Деактивуємо кнопку після відправки
    });
});