fetch('writers.json')
  .then(response => response.json())
  .then(writers => {
    const container = document.getElementById('writer-cards');
    writers.forEach(writer => {
      const card = document.createElement('a');
      card.href = writer.profileUrl;
      card.className = 'card';
      card.innerHTML = `
        <img src="${writer.image}" alt="${writer.name}">
        <h3>${writer.name}</h3>
        <p>${writer.bio}</p>
      `;
      container.appendChild(card);
    });
  });
