// ===============================
// Part 1: Event Handling
// ===============================

// Toggle dark/light mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// FAQ Section Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Dropdown Menu
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
window.addEventListener("click", (e) => {
  if (!e.target.matches("#dropdownBtn")) {
    dropdownContent.style.display = "none";
  }
});

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active classes
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Add active to clicked tab and its content
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ===============================
// Part 3: Form Validation
// ===============================
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

// Validation function
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final feedback
  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully 🎉";
    form.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fix errors before submitting.";
  }
});
