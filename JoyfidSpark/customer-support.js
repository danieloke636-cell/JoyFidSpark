const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
const question = item.querySelector(".faq-question");
const icon = question.querySelector("i");

question.addEventListener("click", () => {
    faqItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove("active");
            otherItem.querySelector("i").className = "fa-solid fa-plus";
        }
    });

    item.classList.toggle("active");

    icon.className = item.classList.contains("active")
        ? "fa-solid fa-xmark"
        : "fa-solid fa-plus";
});

});