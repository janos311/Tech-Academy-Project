// Validate the contact form before submission.
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {
        result.textContent = "Please fill in all fields.";
        return;
    }

    result.textContent = "Form validation successful!";
});