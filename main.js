// Placeholder for future interactive features
console.log("Welcome to The Black List About Page");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 60; // adjust based on your header height
    const top = target.offsetTop - offset;
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  });
});

