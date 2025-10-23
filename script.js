// --- Daten initialisieren ---
let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [],
  },
];

// --- Template-Funktion ---
function getBookCardHtml(book, index) {
  return `
    <div class="book-card">
      <div class="book-header">
        <h2>${book.name}</h2>
        <div class="book-img"></div>
      </div>

      <div class="price-like">
        <span>${book.price.toFixed(2)} €</span>
        <span>${book.likes} ❤</span>
      </div>

      <div class="book-info">
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Erscheinungsjahr:</strong> ${book.publishedYear}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
      </div>

      <!-- Kommentare und Input fehlen noch -->
    </div>
  `;
}

// --- Hauptfunktion ---
function renderBooks() {
  const container = document.getElementById("bookContainer");
  container.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    container.innerHTML += getBookCardHtml(books[i], i);
  }
}

// --- Noch zu implementieren ---
// function toggleLike(index) { ... }
// function addComment(index) { ... }

// --- Initial render ---
renderBooks();
