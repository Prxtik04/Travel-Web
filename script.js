
// Basic form validation script
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Check if all fields are filled out
        if (name === "" || email === "" || message === "") {
            alert("All fields must be filled out!");
            event.preventDefault();
        } else {
            alert("Thank you for your message! We will get back to you soon.");
        }
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for header size
            behavior: "smooth"
        });
    });
});
