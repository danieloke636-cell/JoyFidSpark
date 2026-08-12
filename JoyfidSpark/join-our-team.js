const applicationForm = document.querySelector(".application-form");

applicationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.querySelector("#full-name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const position = document.querySelector("#position").value;
    const experience = document.querySelector("#experience").value.trim();

    if (!fullName || !email || !phone || !position || !experience) {
        alert("Please fill in all the required fields.");
        return;
    }

    const recipient =
        "joyfidsparkcleaningservices@outlook.com";

    const subject =
        `Job Application - ${fullName}`;

    const message =
`JOB APPLICATION

Full Name:
${fullName}

Email Address:
${email}

Phone Number:
${phone}

Area of Interest:
${position}

Experience:
${experience}

--------------------------------
Submitted through Joyfid Spark website.`;

    const mailto =
        `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailto;

});