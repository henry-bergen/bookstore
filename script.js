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
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
    ],
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
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
    ],
  },
];

// --- Hilfsfunktionen ---
function getCommentsHtml(comments) {
  let commentsHtml = "";
  for (let i = 0; i < comments.length; i++) {
    commentsHtml +=
      "<p><strong>[" +
      comments[i].name +
      "]</strong>: " +
      comments[i].comment +
      "</p>";
  }
  return commentsHtml;
}

function getLikedClass(liked) {
  if (liked) return "liked";
  return "";
}

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
        <span>
          ${book.likes} <span class="like-btn ${getLikedClass(
    book.liked
  )}" onclick="toggleLike(${index})">❤</span>
        </span>
      </div>

      <div class="book-info">
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Erscheinungsjahr:</strong> ${book.publishedYear}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
      </div>

      <div class="comments" id="comments-${index}">
        ${getCommentsHtml(book.comments)}
      </div>
      <input id="input-${index}" class="comment-input" type="text" placeholder="Schreibe dein Kommentar..." />
      <button class="comment-btn" onclick="addComment(${index})">Senden</button>
    </div>
  `;
}

// --- Hauptfunktionen ---
function renderBooks() {
  const container = document.getElementById("bookContainer");
  container.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    container.innerHTML += getBookCardHtml(books[i], i);
  }
}

function toggleLike(index) {
  if (books[index].liked) {
    books[index].liked = false;
    books[index].likes -= 1;
  } else {
    books[index].liked = true;
    books[index].likes += 1;
  }
  renderBooks();
}

function addComment(index) {
  const input = document.getElementById("input-" + index);
  const text = input.value.trim();
  if (text === "") return;
  books[index].comments.push({ name: "Leser", comment: text });
  input.value = "";
  renderBooks();
}

// --- Initial render ---
renderBooks();
