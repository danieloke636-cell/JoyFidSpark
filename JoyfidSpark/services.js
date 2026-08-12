const whatsappNumber = "2348133886876";

const serviceButtons = document.querySelectorAll(
    ".service-card-actions button"
);

serviceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".service-card");
        const service = card.dataset.service;
        const action = button.dataset.action;

        let message = "";

        if (action === "quote") {

            message =
                `Hello Joyfid Spark Cleaning Services, I would like to get a quote for ${service}.`;

        } else if (action === "request") {

            message =
                `Hello Joyfid Spark Cleaning Services, I would like to request your ${service}.`;

        }

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");

    });

});


const generalWhatsapp = document.getElementById("general-whatsapp");

if (generalWhatsapp) {

    generalWhatsapp.addEventListener("click", () => {

        const message =
            "Hello Joyfid Spark Cleaning Services, I would like to make an enquiry about your cleaning services.";

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");

    });

}