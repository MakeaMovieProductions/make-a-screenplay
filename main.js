// Load screenplays and render cards
async function loadScreenplays() {
  const response = await fetch('./data/screenplays.json');
  const screenplays = await response.json();
  const container = document.getElementById('screenplay-list');
  container.innerHTML = '';

  screenplays.forEach(sp => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${sp.title}</h3>
      <p>${sp.summary}</p>
      <a href="${sp.samplePdf}" target="_blank">Download Sample PDF</a>
    `;
    container.appendChild(card);
  });
}

// Load writers and render cards
async function loadWriters() {
  const response = await fetch('./data/writers.json');
  const writers = await response.json();
  const container = document.getElementById('writer-list');
  container.innerHTML = '';

  writers.forEach(writer => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${writer.name}</h3>
      <p>${writer.bio}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadScreenplays();
  loadWriters();
});
