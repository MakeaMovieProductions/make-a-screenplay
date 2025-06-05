// Sample data for demonstration
const scripts = [
    {
        title: "The Last Sunrise",
        writer: "Aarav Mehta",
        genre: "Drama, Thriller",
        description: "A retired detective is pulled back into the world of crime when a mysterious letter arrives.",
        profile: "#"
    },
    {
        title: "Cosmic Hearts",
        writer: "Priya Sharma",
        genre: "Romance, Sci-Fi",
        description: "Two astronauts stranded on Mars discover love and the secret to survival.",
        profile: "#"
    },
    {
        title: "Mumbai Shadows",
        writer: "Rohan Kapoor",
        genre: "Crime, Action",
        description: "A gritty tale of an undercover cop infiltrating Mumbai’s most notorious gang.",
        profile: "#"
    },
    {
        title: "The Forgotten Song",
        writer: "Meera Joshi",
        genre: "Musical, Family",
        description: "A young girl rediscovers her family's lost musical legacy.",
        profile: "#"
    }
];

// Render scripts to the page
function renderScripts(filter = "") {
    const list = document.getElementById('scriptsList');
    list.innerHTML = "";

    const filtered = scripts.filter(s =>
        s.title.toLowerCase().includes(filter) ||
        s.writer.toLowerCase().includes(filter) ||
        s.genre.toLowerCase().includes(filter)
    );

    if (filtered.length === 0) {
        list.innerHTML = "<p>No scripts found matching your search.</p>";
        return;
    }

    filtered.forEach(script => {
        const card = document.createElement('div');
        card.className = "script-card";
        card.innerHTML = `
            <div class="script-title">${script.title}</div>
            <div class="writer-name">by ${script.writer}</div>
            <div class="script-genre">${script.genre}</div>
            <div class="script-desc">${script.description}</div>
            <a class="profile-link" href="${script.profile}">View Writer Profile &rarr;</a>
        `;
        list.appendChild(card);
    });
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    renderScripts();

    document.getElementById('searchInput').addEventListener('input', (e) => {
        renderScripts(e.target.value.toLowerCase());
    });
});
