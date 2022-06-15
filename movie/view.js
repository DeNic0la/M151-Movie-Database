function renderRating(amount, movieId){
    let str = "";
    for (let i = 1; i <= 5; i++) {
        if (amount >= i){
            str += `
                <a href="TODO">★</a>
            `
        }
        else {
            str += `
                <a href="TODO">☆</a>
            `
        }
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
          <td>${renderRating(movie.rating,movie.id)}</td> 
          <td>${movie.avg}</td>
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