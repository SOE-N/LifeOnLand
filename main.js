
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


//  Volunteer Form Validation 

document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    // Name
    let name = document.getElementById("v_name").value.trim();
    if (name.length < 2 || !/^[A-Za-z ]+$/.test(name)) {
        valid = false;
        document.getElementById("v_name_error").style.display = "block";
    } else document.getElementById("v_name_error").style.display = "none";

    // Email
    let email = document.getElementById("v_email").value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        valid = false;
        document.getElementById("v_email_error").style.display = "block";
    } else document.getElementById("v_email_error").style.display = "none";

    // Age
    let age = document.getElementById("v_age").value;
    if (age < 16) {
        valid = false;
        document.getElementById("v_age_error").style.display = "block";
    } else document.getElementById("v_age_error").style.display = "none";

    // Country
    if (document.getElementById("v_country").value === "") {
        valid = false;
        document.getElementById("v_country_error").style.display = "block";
    } else document.getElementById("v_country_error").style.display = "none";

    // Volunteer Area
    if (document.getElementById("v_area").value === "") {
        valid = false;
        document.getElementById("v_area_error").style.display = "block";
    } else document.getElementById("v_area_error").style.display = "none";

    // Reason
    let reason = document.getElementById("v_reason").value.trim();
    if (reason.length < 30) {
        valid = false;
        document.getElementById("v_reason_error").style.display = "block";
    } else document.getElementById("v_reason_error").style.display = "none";

    if (valid) {
        alert("Volunteer Form Submitted Successfully!");
        this.reset();
    }
});


//  Donation Form Validation 

document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    // Email
    let email = document.getElementById("d_email").value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        valid = false;
        document.getElementById("d_email_error").style.display = "block";
    } else document.getElementById("d_email_error").style.display = "none";

    // Amount
    let amount = document.getElementById("d_amount").value;
    if (amount < 1) {
        valid = false;
        document.getElementById("d_amount_error").style.display = "block";
    } else document.getElementById("d_amount_error").style.display = "none";

    // Payment Method
    if (document.getElementById("d_payment").value === "") {
        valid = false;
        document.getElementById("d_payment_error").style.display = "block";
    } else document.getElementById("d_payment_error").style.display = "none";

    if (valid) {
        alert("Donation Form Submitted Successfully!");
        this.reset();
    }
});


