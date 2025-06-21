const animeData = [
  { title: "Naruto", image: "https://m.media-amazon.com/images/I/812o8u5rX1L._UF1000,1000_QL80_.jpg" },
  { title: "One Piece", image: "https://images-cdn.ubuy.co.in/633ff1157e3fbc25557517c8-one-piece-poster-japanese-anime-posters.jpg" },
  { title: "Bleach", image: "https://i.pinimg.com/736x/8b/3e/9c/8b3e9c7953d6cdc568b288bdf25b4f10.jpg" },
  { title: "Attack on Titan", image: "https://i.pinimg.com/564x/4c/9c/49/4c9c49b94e4204085e23da2241c4194d.jpg" },
  { title: "Demon Slayer", image: "https://m.media-amazon.com/images/I/81kWkF-sbBL.jpg" }
];

const list = document.getElementById('anime-list');
const searchInput = document.getElementById('search');

// Render function to show cards
function renderAnime(data) {
  list.innerHTML = ''; // Clear previous content
  data.forEach(anime => {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}">
      <h3>${anime.title}</h3>
    `;
   card.onclick = () => {
  window.location.href = `detail.html?title=${encodeURIComponent(anime.title)}`;
};

    list.appendChild(card);
  });
}

// Initial render
renderAnime(animeData);

// Add live search
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = animeData.filter(anime =>
    anime.title.toLowerCase().includes(query)
  );
  renderAnime(filtered);
});
// ✅ Continue Watching Logic
const continueBox = document.getElementById("continue-watching");
const saved = JSON.parse(localStorage.getItem("continueWatching"));

if (saved && saved.title && saved.ep) {
  const box = document.createElement("div");
  box.innerHTML = `
    <div style="background-color:#222; padding: 15px; border-radius: 10px; color: #fff;">
      <h3>🔁 Continue Watching</h3>
      <p>${saved.title} - Episode ${saved.ep}</p>
      <button style="padding: 8px 12px; margin-top: 10px;">Resume</button>
    </div>
  `;
  box.querySelector("button").onclick = () => {
    window.location.href = `watch.html?title=${encodeURIComponent(saved.title)}&ep=${saved.ep}`;
  };
  continueBox.appendChild(box);
}

