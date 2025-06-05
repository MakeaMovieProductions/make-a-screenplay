// // Fade-in animation on scroll
// const faders = document.querySelectorAll('.fade-in');

// const appearOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -100px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) return;
//     entry.target.classList.add('visible');
//     appearOnScroll.unobserve(entry.target);
//   });
// }, appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Load writer cards from writers.json
fetch('writers.json')
  .then(response => response.json())
  .then(writers => {
    const cards = document.getElementById('writer-cards');
    writers.forEach(writer => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${writer.name}</h3>
        <p>${writer.bio} <strong>"${writer.screenplay}"</strong></p>
        <button class="contact-btn" onclick="location.href='mailto:${writer.email}'">Contact</button>
      `;
      cards.appendChild(card);
    });
  });
