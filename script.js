// - Change the text color or background of a section when hovered over or clicked.
document.querySelectorAll("section").forEach((section) => {
  section.addEventListener("click", () => {
    section.classList.toggle("clicked");
  });
});

const funFacts = [
  "I love solving problems in my free time!",
  "I enjoy exploring new technologies and learning new skills.",
  "I'm passionate about contributing to open-source projects.",
  "I once built a personal assistant chatbot from scratch.",
];

document.getElementById("funFactButton").addEventListener("click", () => {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
  const factElement = document.getElementById("funFact");
  factElement.textContent = randomFact;
  factElement.style.display = "block";
});
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const country = document.getElementById("country").value;

    let valid = true;
    let errorMessages = "";

    if (!name || !email || !message || !country) {
      errorMessages += "Please fill all required fields.\n";
      valid = false;
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if (!validateEmail(email)) {
      errorMessages += "Please enter a valid email.\n";
      valid = false;
    }

    if (!valid) {
      alert(errorMessages);
      event.preventDefault();
    }
  });

function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === "none" ? "block" : "none";
}

document.getElementById("themeSwitcher").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
