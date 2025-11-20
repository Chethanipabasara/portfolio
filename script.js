// Slider Logic
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const card = document.querySelector(".cert-card");

let certs = [
  { name: "Spring Boot Fundamentals", org: "Learn Quest" },
  { name: "JavaScript Mastery", org: "Udemy" },
  { name: "React Professional", org: "Meta" },
];

let index = 0;

function updateCard() {
  card.innerHTML = `
    <h3>${certs[index].name}</h3>
    <p>${certs[index].org}</p>
  `;
}

prev.onclick = () => {
  index = (index - 1 + certs.length) % certs.length;
  updateCard();
};

next.onclick = () => {
  index = (index + 1) % certs.length;
  updateCard();
};
const project = document.querySelector('.project-container');

project.addEventListener('mouseenter', () => {
  project.style.transform = "translateY(-5px)";
  project.style.transition = "0.3s ease";
});

project.addEventListener('mouseleave', () => {
  project.style.transform = "translateY(0px)";
});


// Defensive: find elements and report if missing
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!menuToggle) {
    console.error('menuToggle element not found: check the element id and that the script loads AFTER the HTML.');
  }
  if (!navLinks) {
    console.error('navLinks element not found: check the element id and that the script loads AFTER the HTML.');
  }

  // Only attach handlers when elements exist
  if (menuToggle && navLinks) {
    // toggle class + accessible attribute + change icon
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕' : '☰'; // changes to X when open
    });

    // Optional: close menu when clicking outside (mobile)
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active')) {
        const target = e.target;
        if (!navLinks.contains(target) && !menuToggle.contains(target)) {
          navLinks.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuToggle.textContent = '☰';
        }
      }
    });

    // Optional: close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      }
    });
  }
