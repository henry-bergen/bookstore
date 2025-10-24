function getCommentsHtml(comments) {
  let commentsHtml = "";
  if (comments.length < 1) {
    commentsHtml = `Keine Kommentare vorhanden`;
  } else {
    for (let i = 0; i < comments.length; i++) {
      commentsHtml += `<p><strong>[${comments[i].name}]</strong>:${comments[i].comment}</p>`;
    }
  }
  return commentsHtml;
}

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
          <span id="like-count-${index}">${book.likes}</span>
          <span id="like-btn-${index}" class="like-btn ${getLikedClass(
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
