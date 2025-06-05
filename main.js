const profiles = {
  "1": {
    title: "Burning Skies",
    author: "Aisha Patel",
    genre: "Drama",
    pdf: "assets/burning_skies.pdf",
    desc: "A political thriller set in a dystopian future."
  },
  "2": {
    title: "Neon Karma",
    author: "Rafael Gomez",
    genre: "Sci-Fi",
    pdf: "assets/neon_karma.pdf",
    desc: "In a neon-lit Tokyo, karma is digital — and deadly."
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id && profiles[id]) {
  const profile = profiles[id];
  document.getElementById("profile-container").innerHTML = `
    <h2>${profile.title}</h2>
    <p><strong>By:</strong> ${profile.author}</p>
    <p><strong>Genre:</strong> ${profile.genre}</p>
    <p>${profile.desc}</p>
    <a href="${profile.pdf}" target="_blank">📄 Read Script</a>
  `;
}
