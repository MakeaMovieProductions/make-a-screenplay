document.addEventListener("DOMContentLoaded", () => {
  fetch('scripts.json')
    .then(res => res.json())
    .then(profiles => {
      const profileContainer = document.getElementById("profile-container");
      const writersContainer = document.getElementById("writers-container");

      if (writersContainer) {
        Object.entries(profiles).forEach(([id, script]) => {
          const card = document.createElement("div");
          card.className = "card";
          card.onclick = () => location.href = `profile.html?id=${id}`;
          card.innerHTML = `
            <h3>${script.title}</h3>
            <p><strong>Genre:</strong> ${script.genre}</p>
            <p><strong>Length:</strong> ${script.length}</p>
            <p><strong>Author:</strong> ${script.author}</p>
          `;
          writersContainer.appendChild(card);
        });
      }

      if (profileContainer) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        if (id && profiles[id]) {
          const script = profiles[id];
          profileContainer.innerHTML = `
            <h2>${script.title}</h2>
            <p><strong>By:</strong> ${script.author}</p>
            <p><strong>Genre:</strong> ${script.genre}</p>
            <p><strong>Logline:</strong> ${script.desc}</p>
            <a href="${script.pdf}" target="_blank">📄 Read Full Script</a>
          `;
        } else {
          profileContainer.innerHTML = `<p>Profile not found. <a href="writers.html">Back to list</a></p>`;
        }
      }
    })
    .catch(err => {
      console.error("Failed to load script data:", err);
    });
});
