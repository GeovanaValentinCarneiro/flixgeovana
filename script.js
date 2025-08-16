const movies = [
  { title: "Matrix", genre: "Ação", img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg" },
  { title: "Batman: O Cavaleiro das Trevas", genre: "Ação", img: "https://m.media-amazon.com/images/I/81-349iYbfL._AC_SY679_.jpg" },
  { title: "Homem-Aranha: Sem Volta Para Casa", genre: "Ação", img: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg" },
  { title: "Interestelar", genre: "Drama", img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg" },
  { title: "Forrest Gump", genre: "Drama", img: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_SY679_.jpg" },
  { title: "Toy Story", genre: "Animação", img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY679_.jpg" },
  { title: "O Senhor dos Anéis: A Sociedade do Anel", genre: "Fantasia", img: "https://m.media-amazon.com/images/I/91zL5T1pjhL._AC_SY679_.jpg" },
  { title: "A Origem", genre: "Ficção", img: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg" }
];

function renderMovies() {
  const rows = {
    popular: document.getElementById("popular"),
    acao: document.getElementById("acao"),
    drama: document.getElementById("drama"),
    animacao: document.getElementById("animacao"),
  };

  Object.values(rows).forEach(row => row.innerHTML = "");

  movies.forEach(m => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${m.img}" alt="${m.title}">
      <div class="movie-overlay"><button>Assistir</button></div>
    `;

    if (m.genre === "Ação") rows.acao.appendChild(card);
    else if (m.genre === "Drama") rows.drama.appendChild(card);
    else if (m.genre === "Animação") rows.animacao.appendChild(card);

    const popularMovies = ["Matrix", "Batman: O Cavaleiro das Trevas", "Homem-Aranha: Sem Volta Para Casa", "Interestelar"];
    if (popularMovies.includes(m.title)) {
      rows.popular.appendChild(card.cloneNode(true));
    }
  });
}

renderMovies();
