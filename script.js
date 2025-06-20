document.addEventListener('DOMContentLoaded', function () {
  // ✅ Form selection

const form = document.getElementById("registration-form")
 form.addEventListener('submit', function(event) {
      event.preventDefault(); 

const feedbackDiv = document.getElementById("form-feedback")

 // ✅ Retrieve and trim user inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();


  // ✅ Initialize validation variables
  let isValid = true;
  const messages = [];

  // ✅ Username validation
  if (username.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
  }

  // ✅ Email validation
  if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push("Please enter a valid email address.");
  }

  // ✅ Password validation
  if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
  }

 // ✅ Display feedback
  feedbackDiv.style.display = "block"; // make it visible

  if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745"; // green
    form.reset(); // optional: clears the form after successful submission
  } else {
    feedbackDiv.innerHTML = messages.join("<br>"); // show all messages
    feedbackDiv.style.color = "#dc3545"; // red
  }
}
);

 } )