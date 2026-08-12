const contactForm = document.getElementById("contactForm");
const sendWhatsApp = document.getElementById("sendWhatsApp");
const sendEmail = document.getElementById("sendEmail");

const companyWhatsApp = "2348133886876";
const companyEmail = "joyfidsparkcleaningservices@outlook.com";

function getFormData() {
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const service = document.getElementById("contact-service").value;
    const message = document.getElementById("contact-message").value.trim();

    return {
        name,
        email,
        phone,
        service,
        message
    };
}

function validateForm() {
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return false;
    }

    return true;
}

sendWhatsApp.addEventListener("click", () => {
    if (!validateForm()) return;

    const {
        name,
        email,
        phone,
        service,
        message
    } = getFormData();

    const whatsappMessage =
`Hello Joyfid Spark Cleaning Services,

I would like to request a quote.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Needed: ${service}

Message:
${message}`;

    const whatsappURL =
        `https://wa.me/${companyWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
});


sendEmail.addEventListener("click", () => {
    if (!validateForm()) return;

    const {
        name,
        email,
        phone,
        service,
        message
    } = getFormData();

    const subject =
        `Cleaning Service Enquiry - ${service}`;

    const emailBody =
`Hello Joyfid Spark Cleaning Services,

I would like to request a quote.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service Needed: ${service}

Message:
${message}`;

    const mailtoURL =
        `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoURL;
});