function renderRating(amount, movieId) {
    let str = "";
    for (let i = 1; i <= 5; i++) {
        str += `<a href="/rating/${movieId}/${i}">`;
        if (amount >= i) {
            str += "★";
        } else {
            str += "☆";
        }
        str += "</a>";
    }
    return str;
}

export function render(movies) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Movie list</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
<a href="/logout">abmelden</a>
  <table>
    <thead><tr><th>Id</th><th>Title</th><th>Rating</th><th>AVG</th><th></th><th></th></tr></thead>
    <tbody>
      ${movies
        .map(
            (movie) => `
        <tr>
          <td>${movie.id}</td>
          <td>${movie.title}</td>
          <td>${renderRating(movie.userRating, movie.id)}</td> 
          <td>${movie.Rating}</td>
          <td><a href="/movie/delete/${movie.id}">löschen</a></td>
          <td><a href="/movie/form/${movie.id}">bearbeiten</a></td>
        </tr>`,
        )
        .join('')}
    </tbody>
  </table>
  <a href="/movie/form">neu</a>
</body>
</html>
  `;
}