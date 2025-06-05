document.addEventListener("DOMContentLoaded", () => {
  const profiles = {
    "1": {
      title: "Burning Skies",
      author: "Aisha Patel",
      genre: "Drama",
      pdf: "assets/burning_skies.pdf",
      desc: "A political thriller set in a dystopian future. Secrets unravel, power corrupts, and one woman must navigate a world falling apart."
    },
    "2": {
      title: "Neon Karma",
      author: "Rafael Gomez",
      genre: "Sci-Fi",
      pdf: "assets/neon_karma.pdf",
      desc: "In a neon-lit Tokyo of 2084, karma is calculated by AI. When a hacker breaks the system, society spirals into chaos."
    }
    // Add more profiles as needed
  };

  const container = document.getElementById("profile-container");

  if (container) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id && profiles[id]) {
      const profile = profiles[id];
      container.innerHTML = `
        <h2>${profile.title}</h2>
        <p><strong>By:</strong> ${profile.author}</p>
        <p><strong>Genre:</strong> ${profile.genre}</p>
        <p>${profile.desc}</p>
        <a href="${profile.pdf}" target="_blank">📄 Read Full Script</a>
      `;
    } else {
      container.innerHTML = `<p>Profile not found. <a href="writers.html">Back to list</a></p>`;
    }
  }
});
